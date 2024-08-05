import { provideAnimations } from '@angular/platform-browser/animations';
import {
  TuiAlertModule,
  TuiErrorModule,
  TuiLabelModule,
  TuiRootModule,
} from '@taiga-ui/core';
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TuiModule } from './shared/tui/tui.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    CookieService,
    TuiModule,
  ],
};
