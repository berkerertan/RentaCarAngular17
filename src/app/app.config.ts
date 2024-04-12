import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor]))
    ]
};
export const API_URL = 'http://localhost:60805/api';
