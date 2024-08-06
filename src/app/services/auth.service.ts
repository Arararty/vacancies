import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  validEmail = 'mockAuth@gmail.com';
  mockPassword = 'qwe22233';
  cookieService = inject(CookieService);
  constructor(private router: Router) {}

  isLogged(): boolean {
    return !!this.cookieService.get('auth');
  }

  setAuth(): void {
    const expiresIn = 1 / 48;
    this.cookieService.set('auth', 'true', expiresIn);
    this.router.navigate(['/vacancies']);
  }

  logOut(): void {
    this.cookieService.delete('auth');
    this.router.navigate(['/auth']);
  }
}
