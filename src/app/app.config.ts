import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { USER_API_PROVIDER } from './domain/user/infraestructure/providers/user-api.provider';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), USER_API_PROVIDER ]
};