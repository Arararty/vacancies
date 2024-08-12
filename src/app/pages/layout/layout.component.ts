import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Vacancy } from '../../interfaces/vacancies.interface';
import { HhService } from '../../services/hh.service';
import { TuiModule } from '../../shared/tui/tui.module';
import { VacancyCardComponent } from '../../components/vacancy-card/vacancy-card.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { VacanciesFilterPipe } from '../../shared/pipes/vacancies-filter.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TuiModule,
    VacancyCardComponent,
    CommonModule,
    VacanciesFilterPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  unsubscribe$: Subject<void> = new Subject<void>();
  hhService = inject(HhService);
  cdr = inject(ChangeDetectorRef);
  authService = inject(AuthService);
  vacancies: Vacancy[] = [];
  showLoader: boolean = false;
  searchValue: FormControl<string | null> = new FormControl<string | null>(
    null
  );

  ngOnInit(): void {
    this.getVacancies();
  }

  logOut(): void {
    this.authService.logOut();
  }

  getVacancies(): void {
    this.showLoader = true;
    this.hhService
      .getVacancies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Vacancy[]) => {
        this.vacancies = res;
        this.showLoader = false;
        console.log(this.vacancies);

        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
