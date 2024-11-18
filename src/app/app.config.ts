import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import {   provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthorizationService } from './services/authorization.service';
import { provideApollo } from 'apollo-angular';
import { createApollo } from './app.component';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing:true}),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideApollo(createApollo),
        AuthorizationService
    ]
};
