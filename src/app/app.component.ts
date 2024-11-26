import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthorizationService } from './services/authorization.service';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { MaterialModule } from './modules/material.module';
import { environment } from '../environments/environment';
import { ShortUserDataComponent } from './_authorized/shared/short-user-data/short-user-data.component';

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
    MaterialModule,
    ShortUserDataComponent
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
    private readonly router: Router
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        sessionStorage.setItem('lastUrl', event.url);
      } else if (event instanceof NavigationEnd) {
        this.currentUrl = event.url.split('/')[1];
      }
    })
  }

  logout() {
    this.authorizationService.logout();
  }
}
