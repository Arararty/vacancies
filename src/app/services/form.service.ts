import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthForm } from '../interfaces/auth-form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  authFormGroup!: FormGroup<AuthForm>;
  constructor() {
    this.authFormGroup = this.initAuthService();
  }

  initAuthService(): FormGroup<AuthForm> {
    return new FormGroup<AuthForm>({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(
          '^[A-Za-z0-9]+([.+_-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*\\.[a-zA-Z]{2,63}$'
        ),
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
