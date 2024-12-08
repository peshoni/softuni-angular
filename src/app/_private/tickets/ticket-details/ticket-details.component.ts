import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../../modules/material.module';
import { ProjectDetailsComponent } from '../../projects/project-details/project-details.component';
import {
  GetTicketByIdQuery, Ticket_Logs_Insert_Input, Ticket_Statuses_Enum, TicketFieldsFragment, TicketLogFragment, Tickets_Insert_Input,
  Tickets_Set_Input, User_Roles_Enum, UserShortFieldsFragment
} from '../../../../generated/graphql';
import { TicketsService } from '../tickets.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { SnackbarTypes, Util } from '../../../utils/common-utils';
import { PathSegments } from '../../../app.routes';
import { ProjectsService } from '../../projects/projects.service';
import { FormsUtil } from '../../../utils/forms-util';
import { NgFor, NgIf } from '@angular/common';
import { TicketLogDetailsComponent } from '../ticket-log-details/ticket-log-details.component';
import { DetailsBaseComponent } from '../../core/abstract-classes/details-base.component';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';
import { UsersService } from '../../users/users.service';
import { CreateLogComponent } from '../create-log/create-log.component';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    ShortUserDataComponent,
    TicketLogDetailsComponent
  ],
  providers: [TicketsService, ProjectsService],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss'
})
export class TicketDetailsComponent extends DetailsBaseComponent<ProjectDetailsComponent> implements OnInit {
  private readonly ticketsService: TicketsService = inject(TicketsService);
  private readonly projectsService: ProjectsService = inject(ProjectsService);
  private readonly usersService: UsersService = inject(UsersService);
  protected readonly dialog: MatDialog = inject(MatDialog);
  statuses = Ticket_Statuses_Enum;
  ticket: TicketFieldsFragment | undefined;
  assignees: UserShortFieldsFragment[] = [];
  isPanelLogPanelExpanded: boolean = true;

  ngOnInit(): void {
    this.title = this.isCreateMode ? 'Create ticket' : 'Ticket details';
    this.parentSegment = PathSegments.TICKETS;

    this.form = this.formBuilder.group({
      status: [null, Validators.required],
      description: [null, Validators.required],
      assignee_id: [null]
    });

    this.usersService.getUserByRole(User_Roles_Enum.Assignee).subscribe(
      (result) => {
        if (result.data.users) {
          this.assignees = result.data.users;
        } else {
          const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.SUCCESS);
          this.matSnackBar.open('Wasn\'t found any assignee. Please, try again later.', '', config);
          this.assignees = [];
        }
      }
    );

    if (this.isCreateMode) {
      this.currentObjectId = undefined;
    } else {
      this.ticketsService.getTicketById(this.paramId).subscribe((response: ApolloQueryResult<GetTicketByIdQuery>) => {
        if (response.error || response.errors) {
          const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
          const ref = this.matSnackBar.open('Resource wasn\'t found.', '', config);
          ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
            this.router.navigate([PathSegments.TICKETS]);
          });
        } else {
          this.ticket = cloneDeep(response.data.tickets[0]); // it's readonly before the clone
          this.currentObjectId = this.ticket.id;
          this.isInPreviewMode = !this.isCreateMode && (this.currentUserId !== this.ticket.reporter.id);
          this.form.patchValue(this.ticket);
          this.form.controls['assignee_id'].setValue(this.ticket.assignee?.id)
        }
      });
    }
  }

  confirm() {
    FormsUtil.validateFormGroupControls(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    const formValue = this.form.getRawValue();

    if (this.isCreateMode) {
      const insertInput: Tickets_Insert_Input = formValue;
      insertInput.reporter_id = this.currentUserId;
      if (this.paramProjectId) {
        insertInput.project_id = this.paramProjectId
      }
      this.ticketsService.insertTicket(insertInput).subscribe(
        ({ data, errors }) => {
          console.log(errors);
          this.close();
        }
      );
    } else {
      const setInput: Tickets_Set_Input = formValue;
      this.ticketsService.updateTicketById(this.currentObjectId!, setInput).subscribe(
        ({ data, errors }) => {
          this.close();
        }
      );
    }
  }

  deleteLogById(logId: string) {
    this.ticketsService.deleteLog(logId).subscribe(
      (result) => {
        if (this.ticket && result.data?.delete_ticket_logs_by_pk) {
          this.ticket.logs = this.ticket?.logs.filter(e => e.id !== result.data?.delete_ticket_logs_by_pk?.id);
        }
      });
  }

  upsertLog(log: TicketLogFragment) {
    const input: Ticket_Logs_Insert_Input = {
      id: log.id,
      ticket_id: log.ticket_id,
      description: log.description,
      user_id: log.user.id
    }
    this.ticketsService.upsertLog(input).subscribe(
      (result) => {
        if (this.ticket && result.data?.insert_ticket_logs_one) {
          this.ticket.logs = this.ticket?.logs.filter(e => e.id !== result.data?.insert_ticket_logs_one?.id);
          this.ticket.logs.unshift(result.data?.insert_ticket_logs_one);
        }
      });
  }

  openAddLogDialog() {
    const closable = true;
    const config: MatDialogConfig = FormsUtil.getDialogConfig(closable, {
      data: {
        ticket_id: this.currentObjectId,
        user_id: this.currentUserId
      }
    });
    config.maxHeight = '90vh'

    const dialogRef = this.dialog.open(CreateLogComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        location.reload();
      }
    });
  }
}
