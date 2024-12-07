import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../../../modules/material.module';
import { ProjectDetailsComponent } from '../../projects/project-details/project-details.component';
import { GetTicketByIdQuery, Ticket_Statuses_Enum, TicketFieldsFragment, Tickets_Insert_Input, Tickets_Set_Input, User_Roles_Enum, UserShortFieldsFragment } from '../../../../generated/graphql';
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
  statuses = Ticket_Statuses_Enum;
  ticket: TicketFieldsFragment | undefined;
  assignees: UserShortFieldsFragment[] = [];

  ngOnInit(): void {
    this.title = this.isCreateMode ? 'Create ticket' : 'Ticket details';

    this.parentSegment = PathSegments.TICKETS;

    this.form = this.formBuilder.group({
      status: [null, Validators.required],
      description: [null, Validators.required],
      assignee_id: [null]
    });

    if (this.isCreateMode) {
      this.currentObjectId = undefined;
      // this.form.addControl('assignee_id', new FormControl(''));
      this.usersService.getUserByRole(User_Roles_Enum.Assignee).subscribe(
        (result) => {
          console.log(result.data)
          if (result.data.users) {
            this.assignees = result.data.users;
          } else {
            const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.SUCCESS);
            this.matSnackBar.open('Wasn\'t found any assignee. Please, try again later.', '', config);
            this.assignees = [];
          }
        }
      );
    } else {

      this.ticketsService.getTicketById(this.paramId).subscribe((response: ApolloQueryResult<GetTicketByIdQuery>) => {
        if (response.error || response.errors) {
          const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
          const ref = this.matSnackBar.open('Resource wasn\'t found.', '', config);
          ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
            this.router.navigate([PathSegments.TICKETS]);
          });
        } else {
          this.ticket = response.data.tickets[0];
          console.log(this.ticket.logs);
          this.currentObjectId = this.ticket.id;
          this.isInPreviewMode = !this.isCreateMode && (this.currentUserId !== this.ticket.reporter.id);
          this.form.patchValue(this.ticket);
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
    console.log(formValue);

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
          console.log(errors);
          if (errors) {
          } else {
            this.close();
          }
        }
      );
    }
  }
}