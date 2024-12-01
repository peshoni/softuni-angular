import { AfterViewInit, Component } from '@angular/core';
import { TicketsListDataSource } from './tickets-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { MaterialModule } from '../../../modules/material.module';
import { TicketFieldsFragment } from '../../../../generated/graphql';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { TicketsService } from '../tickets.service';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { TableBaseComponent } from '../../shared/abstract/table-base.component';
import { PathSegments } from '../../../app.routes';
import { ShortUserDataComponent } from "../../shared/short-user-data/short-user-data.component";
import { IdShrinkPipe } from '../../../pipes/id-shrink.pipe';
import { FormsUtil } from '../../../utils/forms-util';
import { NgClass } from '@angular/common';
import { ElapsedTimePipe } from '../../../pipes/elapsed-time.pipe';

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [
    MaterialModule,
    NgClass,
    TableNavbarComponent,
    ShortUserDataComponent,
    IdShrinkPipe,
    ElapsedTimePipe],
  providers: [TicketsService],
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss',
  animations: [addTableRowAnimation],
})
export class TicketsListComponent extends TableBaseComponent<TicketFieldsFragment> implements AfterViewInit {
  dataSource = new TicketsListDataSource();
  displayedColumns: (keyof (TicketFieldsFragment & { actions: '' }))[] = ['id', 'reporter', 'assignee', 'updated_at', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.setPaginatorAndSort(this.paginator, this.sort);
    this.table.dataSource = this.dataSource;
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
