import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { EnumeratorsGQL, EnumeratorsQuery, Project_Statuses, Project_Statuses_Select_Column } from '../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { AuthorizationService } from './shared-services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isHandset$: Observable<boolean>;
  title = 'softuni-tickets-app';

  constructor(
    public authorizationService: AuthorizationService,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly enumeratorsGQL: EnumeratorsGQL) {

    this.enumeratorsGQL.fetch().subscribe(({ data }) => {
      const enums: EnumeratorsQuery = data;
      //const g:Project_Statuses_Select_Column[] = enums.genders;

      console.log(enums.genders);
      console.log(enums.project_statuses)
      console.log(enums.ticket_statuses)
      console.log(enums.user_roles)
    })

    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }
}
