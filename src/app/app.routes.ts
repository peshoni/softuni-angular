import { Routes } from "@angular/router";
import { authGuardFn } from "./guards/auth.guard";
import { ProjectsListComponent } from "./_authorized/projects/projects-list/projects-list.component";
import { TicketsListComponent } from "./_authorized/tickets/tickets-list/tickets-list.component";
import { UsersListComponent } from "./_authorized/users/users-list/users-list.component";
import { LandingComponent } from "./_public/landing/landing.component";
 
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'authorize', // GoTo landing page of the Public Module
    canActivateChild: [authGuardFn],
    children: [
      {
        path: '',
        component: LandingComponent
      }
    ]
  },
  {
    path: '',
    canActivateChild: [authGuardFn],
    children: [
      {
        path: 'projects',
        component: ProjectsListComponent
      },
      // {
      //   path: 'projects/details/:id',
      //   component: ProjectDetailsComponent
      //   activatedRoute.snapshot.params['id']
      // },
      {
        path: 'tickets',
        component: TicketsListComponent
      },
      {
        path: 'users',
        component: UsersListComponent
      }
    ]
  },
  { path: '**', redirectTo: 'authorize', pathMatch: 'full' } // all missing paths navigates to 'authorize'
];