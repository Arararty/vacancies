import { importProvidersFrom, NgModule } from '@angular/core';
import {
  TuiLabelModule,
  TuiErrorModule,
  TuiRootModule,
  TuiButtonModule,
  TuiLoaderModule,
  tuiLoaderOptionsProvider,
} from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiFieldErrorPipeModule,
  TuiInputPasswordModule,
  TUI_PASSWORD_TEXTS,
  TUI_VALIDATION_ERRORS,
  tuiInputPasswordOptionsProvider,
} from '@taiga-ui/kit';
import { of } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    TuiInputModule,
    TuiLabelModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLoaderModule,
  ],

  exports: [
    TuiInputModule,
    TuiLabelModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLoaderModule,
  ],

  providers: [
    importProvidersFrom(TuiRootModule),
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        invalidEmail: 'Неверный  Email',
        invalidPassword: 'Неверный пароль',
        required: 'Обязательно для заполнения',
        pattern: 'Некорректный формат',
        minlength: (context: { requiredLength: any }) =>
          `Минимальное количество символов ${context.requiredLength}`,
      },
    },
    tuiInputPasswordOptionsProvider({
      icons: {
        hide: 'tuiIconUnlockLarge',
        show: 'tuiIconLockLarge',
      },
    }),
    tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true,
    }),
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of(['']),
    },
  ],
})
export class TuiModule {}
