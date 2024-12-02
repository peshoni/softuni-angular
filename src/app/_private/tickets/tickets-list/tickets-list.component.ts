import { AfterViewInit, Component } from '@angular/core';
import { TicketsListDataSource } from './tickets-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { MaterialModule } from '../../../modules/material.module';
import { Ticket_Statuses_Enum, TicketFieldsFragment } from '../../../../generated/graphql';
import { TicketsService } from '../tickets.service';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { PathSegments } from '../../../app.routes';
import { IdShrinkPipe } from '../../../pipes/id-shrink.pipe';
import { FormsUtil } from '../../../utils/forms-util';
import { NgClass } from '@angular/common';
import { ElapsedTimePipe } from '../../../pipes/elapsed-time.pipe';
import { TableBaseComponent } from '../../core/abstract-classes/table-base.component';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';
import { TableNavbarComponent } from '../../core/table-navbar/table-navbar.component';
import { EnumFilterComponent } from '../../core/enum-filter/enum-filter.component';

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [
    MaterialModule,
    NgClass,
    TableNavbarComponent,
    ShortUserDataComponent,
    IdShrinkPipe,
    ElapsedTimePipe,
    EnumFilterComponent
  ],
  providers: [TicketsService],
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss',
  animations: [addTableRowAnimation],
})
export class TicketsListComponent extends TableBaseComponent<TicketFieldsFragment> implements AfterViewInit {
  readonly statuses = ['all', ...Object.values(Ticket_Statuses_Enum).map(e => e)];
  dataSource = new TicketsListDataSource();
  displayedColumns: (keyof (TicketFieldsFragment & { actions: '' }))[] = ['id', 'status', 'reporter', 'assignee', 'updated_at', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.setPaginatorAndSort(this.paginator, this.sort);
    this.table.dataSource = this.dataSource;
  }

  filterBy(selectedOption: string, options: string[]) {
    this.dataSource.filterBy(selectedOption, options)
  }

  onAddClick() { // open dialog 
    const closable = true;
    const config: MatDialogConfig = FormsUtil.getDialogConfig(closable, { data: {} });
    const dialogRef = this.dialog.open(TicketDetailsComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  showDetails(ticket: TicketFieldsFragment) {
    this.router.navigate([PathSegments.TICKETS, PathSegments.DETAILS, ticket.id]);
  }
}
