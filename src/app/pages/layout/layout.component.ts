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

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TuiModule, VacancyCardComponent, CommonModule],
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
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
