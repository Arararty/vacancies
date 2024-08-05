import { Component, Input } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancies.interface';

@Component({
  selector: 'app-vacancy-card',
  standalone: true,
  imports: [],
  templateUrl: './vacancy-card.component.html',
  styleUrl: './vacancy-card.component.scss',
})
export class VacancyCardComponent {
  @Input() vacancy!: Vacancy;
}
