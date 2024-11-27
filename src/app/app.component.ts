import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthorizationService } from './services/authorization.service';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { ShortUserDataComponent } from './_authorized/shared/short-user-data/short-user-data.component';
import { authInterceptor } from './interceptors/auth.interceptor';

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
    });
  }

  logout() {
    this.authorizationService.logout();
  }
}
