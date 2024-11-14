import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersListDataSource, UsersListItem } from './users-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { AuthorizationService } from '../../../services/authorization.service';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MaterialModule
  ],
  providers: [
    AuthorizationService
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  animations: [addTableRowAnimation],
})
export class UsersListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UsersListItem>;
  dataSource = new UsersListDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
