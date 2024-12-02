import { Routes } from "@angular/router";
import { authorizationGuardFn } from "./guards/auth.guard"; 
import { LoginComponent } from "./_public/login/login.component";
import { ProjectDetailsComponent } from "./_private/projects/project-details/project-details.component";
import { ProjectsListComponent } from "./_private/projects/projects-list/projects-list.component";
import { TicketDetailsComponent } from "./_private/tickets/ticket-details/ticket-details.component";
import { TicketsListComponent } from "./_private/tickets/tickets-list/tickets-list.component";
import { UserDetailsComponent } from "./_private/users/user-details/user-details.component";
import { UsersListComponent } from "./_private/users/users-list/users-list.component";

export enum PathSegments {
  LOGIN = 'login',
  REGISTER = 'register',
  PROJECTS = 'projects',
  TICKETS = 'tickets',
  USERS = 'users',
  DETAILS = 'details',
  EMPTY = ''
}

export const routes: Routes = [
  { path: '', redirectTo: PathSegments.LOGIN, pathMatch: 'full' }, // try to navigate to PROJECTS
  {
    path: PathSegments.LOGIN,
    component: LoginComponent
  },
  {
    path: PathSegments.REGISTER,
    component: UserDetailsComponent
  },
  {
    path: PathSegments.PROJECTS,
    canActivate: [authorizationGuardFn],
    component: ProjectsListComponent
  },
  {
    path: `${PathSegments.PROJECTS}/${PathSegments.DETAILS}/:id`,
    canActivate: [authorizationGuardFn],
    component: ProjectDetailsComponent
  },
  {
    path: PathSegments.TICKETS,
    canActivate: [authorizationGuardFn],
    component: TicketsListComponent
  },
  {
    path: `${PathSegments.TICKETS}/${PathSegments.DETAILS}/:id`,
    canActivate: [authorizationGuardFn],
    component: TicketDetailsComponent
  },
  {
    path: PathSegments.USERS,
    canActivate: [authorizationGuardFn],
    component: UsersListComponent
  },
  {
    path: `${PathSegments.USERS}/${PathSegments.DETAILS}/:id`,
    canActivate: [authorizationGuardFn],
    component: UserDetailsComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' } // all missing paths navigates to 'authorize'
];