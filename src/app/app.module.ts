import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { authGuardFn } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },

    {
        path: 'authorize', // GoTo landing page of the Public Module
        canActivate: [authGuardFn],
        loadChildren: () => import('../app/public/public.module').then((m) => m.PublicModule),
    },
    {
        path: '',
        canActivate: [authGuardFn],
        loadChildren: () => import('../app/authorized/authorized.module').then((m) => m.AuthorizedModule),
    },
    { path: '**', redirectTo: 'authorize', pathMatch: 'full' } // all missing paths navigates to 'authorize'
];

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        //RouterOutlet,
        CommonModule,
        // Material modules
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule,
        MatExpansionModule,
        GraphQLModule
    ]
})
export class AppModule { }