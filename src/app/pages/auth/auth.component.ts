import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from './../../interfaces/auth-form.interface';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  inject,
  OnInit,
} from '@angular/core';
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
export class AuthComponent implements OnInit {
  isSubmitBtnDisabled = true;
  showPassword: boolean = true;
  formService = inject(FormService);
  authService = inject(AuthService);
  cdr = inject(ChangeDetectorRef);
  authForm!: FormGroup<AuthForm>;

  constructor() {
    this.authForm = this.formService.authFormGroup;
  }

  ngOnInit(): void {}

  toogleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (
      this.email?.value === this.authService.validEmail &&
      this.password?.value === this.authService.mockPassword
    ) {
      this.authService.setAuth();
    } else {
      if (this.email?.value !== this.authService.validEmail) {
        this.email?.setErrors({ invalidEmail: true });
      }
      if (this.password?.value !== this.authService.mockPassword) {
        this.password?.setErrors({ invalidPassword: true });
      }
      console.log(this.authForm);
    }
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }
}
