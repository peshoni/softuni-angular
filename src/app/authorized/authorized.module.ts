import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'projects',
    component: ProjectsListComponent
  },
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
    UsersListComponent,
    ProjectsListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class AuthorizedModule { }
