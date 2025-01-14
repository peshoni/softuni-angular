import { ApplicationConfig, ErrorHandler, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { HttpHeaders, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { authInterceptor } from './interceptors/auth.interceptor';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { GlobalErrorHandler } from './global-error-handler';

function createApollo(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);

  const headers = new HttpHeaders({
    'Accept': 'charset=utf-8'
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideApollo(createApollo),
    {
      //Handles all errors and applies some business logic.
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ]
};
