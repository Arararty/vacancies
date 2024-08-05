import { AuthService } from './../services/auth.service';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const canActivateAuth: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLogged()) {
    return router.createUrlTree(['/vacancies']);
  }

  return true;
};
