import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { EnumeratorsGQL, EnumeratorsQuery } from '../generated/graphql';
import { AuthorizationService } from './services/authorization.service';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { MaterialModule } from './modules/material/material.module';
import { environment } from '../environments/environment';

export function createApollo(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);

  const headers = new HttpHeaders({
    'Accept': 'charset=utf-8',
    'x-hasura-admin-secret': 'softuniAngularAdminSecret'
  });

  return {
    link: httpLink.create({
      uri: environment.hasuraUrl,
      headers,
      withCredentials: false
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    }
  };
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //RouterModule,
    RouterLink,
    MaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  isHandset$: Observable<boolean>;
  title = 'Softuni Tickets App';
  currentUrl: string = '';

  constructor(
    public authorizationService: AuthorizationService,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly enumeratorsGQL: EnumeratorsGQL,
    private readonly router: Router
  ) {

    this.enumeratorsGQL.fetch().subscribe(({ data }) => {
      const enums: EnumeratorsQuery = data;
      //const g:Project_Statuses_Select_Column[] = enums.genders;

      console.log(enums.genders);
      console.log(enums.project_statuses);
      console.log(enums.ticket_statuses);
      console.log(enums.user_roles);
    });

    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.currentUrl = event.url.split('/')[1];
      }

    })
  }
}


