import { AfterViewInit, Component } from '@angular/core';
import { TicketsListDataSource } from './tickets-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { MaterialModule } from '../../../modules/material/material.module';
import { GetTicketsQuery, TicketFieldsFragment, Tickets } from '../../../../generated/graphql';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { TicketsService } from '../tickets.service';
import { FormsService } from '../../../services/forms.service';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { TableBaseComponent } from '../../shared/table-base/table-base.component';
import { PathSegments } from '../../../app.routes';
import { ShortUserDataComponent } from "../../shared/short-user-data/short-user-data.component";

@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent, ShortUserDataComponent],
  providers: [TicketsService, FormsService],
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss',
  animations: [addTableRowAnimation],
})
export class TicketsListComponent extends TableBaseComponent<GetTicketsQuery['tickets']> implements AfterViewInit {
  dataSource = new TicketsListDataSource();
  displayedColumns = ['id', 'reporter', 'assignee','actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onAddClick() { // open dialog 
    const closable = true;
    const config: MatDialogConfig = this.formService.getDialogConfig(closable, { example: 'someData..' });
    const dialogRef = this.dialog.open(TicketDetailsComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  cast(item: TicketFieldsFragment): TicketFieldsFragment {
    return item;
  }

  showDetails(ticket: TicketFieldsFragment) {
    console.log(ticket);
    this.router.navigate([PathSegments.TICKETS, PathSegments.DETAILS, ticket.id]);
  }
}
