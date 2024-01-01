import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

export const apiErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      console.log(error);
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Errorrrr: ${error.error.message}`;
        return throwError(() => errorMessage);
      } else {
        // server-side error
        if (error.status == 400 && error.error != null) {
          errorMessage = error.error.message;
          return throwError(() => errorMessage);
        } else if (error.status == 422) {
          // auto logout if 401 response returned from api
          errorMessage = error.error.errors;
          return throwError(() => errorMessage);
        } else if (error.status == 401) {
          // auto logout if 401 response returned from api
          errorMessage = 'مشکل احراز هویت';
          return throwError(() => errorMessage);
        } else if (error.status == 404) {
          errorMessage = 'ارتباط با سرور برقرار نشد';
          return throwError(() => errorMessage);
        }  else {
          errorMessage = `خطای ناشناخته شده`;
          console.log(req);

          return throwError(() => errorMessage);
        }
      }
    }),
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log('event--->>>', event);
      }

      return event;
    })
  );
};
