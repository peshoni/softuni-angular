import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', // GoTo landing page of the Public Module
        loadChildren: () => import('../app/public/public.module').then((m) => m.PublicModule),
    },
    {
        path: 'tickets',
        loadChildren: () => import('../app/authorized/authorized.module').then((m) => m.AuthorizedModule),
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        RouterOutlet,
        CommonModule
    ]
})
export class AppModule { }