import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isHandset$: Observable<boolean>;
  title = 'softuni-tickets-app';
  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }
}
