import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { apiErrorHandlerInterceptor } from './api-error-handler.interceptor';

describe('apiErrorHandlerInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req: any, next: any) => 
    TestBed.runInInjectionContext(() => apiErrorHandlerInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
