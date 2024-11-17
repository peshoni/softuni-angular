import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersListDataSource } from './users-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { AuthorizationService } from '../../../services/authorization.service';
import { MaterialModule } from '../../../modules/material/material.module';
import { Users } from '../../../../generated/graphql';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent],
  providers: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  animations: [addTableRowAnimation],
})
export class UsersListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Users>;
  dataSource = new UsersListDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'username', 'name','family','actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onAddClick() {
    console.log('ADD USER')
  }
}
