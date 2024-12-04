import { HttpEventType, type HttpEvent, type HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (request, next) => {

  const clonedRequest = request.clone({ setHeaders: { 'x-hasura-admin-secret': 'softuniAngularAdminSecret' } });

  return next(clonedRequest).pipe(
    tap(((httpEvent: HttpEvent<any>) => {
      if (httpEvent.type === HttpEventType.Response) {
        if (httpEvent.body.errors) {
          const message: string = httpEvent.body.errors[0]?.message;
          if (message.includes('x-hasura-admin-secret') || message.includes('x-hasura-access-key')) {
            console.log('Invalid credentials.')
          }
        }
      }
    }))
  );
};
