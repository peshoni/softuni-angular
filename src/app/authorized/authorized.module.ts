import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    TicketsComponent,
    UsersComponent
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
