import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthComponent } from './pages/auth/auth.component';
import { canActivateVacancies } from './guards/access-quard';
import { canActivateAuth } from './guards/auth-quard';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivate: [canActivateAuth] },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'vacancies',
    component: LayoutComponent,
    canActivate: [canActivateVacancies],
  },
];
