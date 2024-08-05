import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TuiDialogModule, TUI_SANITIZER } from '@taiga-ui/core';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HhService } from './services/hh.service';
import { Vacancy } from './interfaces/vacancies.interface';
import { Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {}
