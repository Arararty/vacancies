import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from './../../interfaces/auth-form.interface';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';
import { TuiModule } from '../../shared/tui/tui.module';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TuiModule],

  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  isSubmitBtnDisabled = true;
  showPassword: boolean = true;
  formService = inject(FormService);
  authService = inject(AuthService);
  authForm!: FormGroup<AuthForm>;

  constructor() {
    console.log('mockAuth@gmail.com', 'qwe22233');
    this.authForm = this.formService.authFormGroup;
  }

  toogleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (
      this.email?.value === this.authService.validEmail &&
      this.password?.value === this.authService.mockPassword
    ) {
      this.authService.setAuth();
      return;
    }
    if (this.email?.value !== this.authService.validEmail) {
      this.email?.setErrors({ invalidEmail: true });
      return;
    }
    if (this.password?.value !== this.authService.mockPassword) {
      this.password?.setErrors({ invalidPassword: true });
      return;
    }
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }
}
