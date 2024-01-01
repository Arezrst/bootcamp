import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiPrefixInterceptor } from './@shared/api-prefix.interceptor';
import { apiErrorHandlerInterceptor } from './@shared/api-error-handler.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient( withInterceptors([apiPrefixInterceptor]))

  ]
};
