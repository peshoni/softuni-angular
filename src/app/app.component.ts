import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthorizationService } from './services/authorization.service';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './modules/material.module'; 
import { authInterceptor } from './interceptors/auth.interceptor';
import { User_Roles_Enum } from '../generated/graphql';
import { PathSegments } from './app.routes';
import { ShortUserDataComponent } from './_private/core/short-user-data/short-user-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MaterialModule,
    ShortUserDataComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: authInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  roles = User_Roles_Enum;
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
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url.split('/')[1];
      }
    });
  }

  editMyProfile() {
    const currentUser = this.authorizationService.currentUser();
    if (currentUser) {
      this.router.navigate([PathSegments.USERS, PathSegments.DETAILS, currentUser.id]);
    }
  }

  logout() {
    this.authorizationService.logout();
  }
}
