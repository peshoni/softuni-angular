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

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', // GoTo landing page of the Public Module
        loadChildren: () => import('../app/public/public.module').then((m) => m.PublicModule),
    },
    {
        path: 'app',
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
        CommonModule,
        // Material modules
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule,
        MatExpansionModule 
    ]
})
export class AppModule { }