import { FormControl } from '@angular/forms';

export interface AuthForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
