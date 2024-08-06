import { SalaryCurrencyPipe } from './../../shared/pipes/currency.pipe';
import { Component, Input } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancies.interface';
import { SalaryPipe } from '../../shared/pipes/salary.pipe';
import { CommonModule } from '@angular/common';
import { TuiModule } from '../../shared/tui/tui.module';

@Component({
  selector: 'app-vacancy-card',
  standalone: true,
  imports: [SalaryPipe, CommonModule, SalaryCurrencyPipe, TuiModule],
  templateUrl: './vacancy-card.component.html',
  styleUrl: './vacancy-card.component.scss',
})
export class VacancyCardComponent {
  @Input() vacancy!: Vacancy;
}
