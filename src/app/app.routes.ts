import { Routes } from "@angular/router";
import { authGuardFn } from "./guards/auth.guard";
import { ProjectsListComponent } from "./_authorized/projects/projects-list/projects-list.component";
import { TicketsListComponent } from "./_authorized/tickets/tickets-list/tickets-list.component";
import { UsersListComponent } from "./_authorized/users/users-list/users-list.component";
import { LandingComponent } from "./_public/landing/landing.component";
import { ProjectDetailsComponent } from "./_authorized/projects/project-details/project-details.component";
import { UserDetailsComponent } from "./_authorized/users/user-details/user-details.component";
import { TicketDetailsComponent } from "./_authorized/tickets/ticket-details/ticket-details.component";

export enum PathSegments {
  AUTHORIZE = 'authorize',
  PROJECTS = 'projects',
  TICKETS = 'tickets',
  USERS = 'users',
  DETAILS = 'details',
  EMPTY = ''
}

export const routes: Routes = [
  { path: '', redirectTo: PathSegments.PROJECTS, pathMatch: 'full' }, // try to navigate to PROJECTS
  {
    path: '', // GoTo landing page of the Public Module
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
    canActivateChild: [authGuardFn], // allow if user is authorized - otherwise stay to Landing component on root 
    children: [
      {
        path: PathSegments.PROJECTS,
        component: ProjectsListComponent
      },
      {
        path: `${PathSegments.PROJECTS}/${PathSegments.DETAILS}/:id`,
        component: ProjectDetailsComponent
      },
      {
        path: PathSegments.TICKETS,
        component: TicketsListComponent
      },
      {
        path: `${PathSegments.TICKETS}/${PathSegments.DETAILS}/:id`,
        component: TicketDetailsComponent
      },
      {
        path: PathSegments.USERS,
        component: UsersListComponent
      },
      {
        path: `${PathSegments.USERS}/${PathSegments.DETAILS}/:id`,
        component: UserDetailsComponent
      }
    ]
  },
  { path: '**', redirectTo: PathSegments.AUTHORIZE, pathMatch: 'full' } // all missing paths navigates to 'authorize'
];