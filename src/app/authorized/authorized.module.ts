import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  {
    path: 'tickets',
    component: TicketsListComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  }
];

@NgModule({
  declarations: [
    TicketsListComponent,
    UsersListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AuthorizedModule { }
