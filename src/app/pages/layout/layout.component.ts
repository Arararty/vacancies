import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Vacancy } from '../../interfaces/vacancies.interface';
import { HhService } from '../../services/hh.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  unsubscribe$: Subject<void> = new Subject<void>();
  hhService = inject(HhService);
  cdr = inject(ChangeDetectorRef);
  vacancies: Vacancy[] = [];

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(): void {
    this.hhService
      .getVacancies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Vacancy[]) => {
        this.vacancies = res;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
