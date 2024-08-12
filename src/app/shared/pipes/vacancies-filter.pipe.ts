import { Pipe, PipeTransform } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancies.interface';

@Pipe({
  name: 'vacanciesFilter',
  standalone: true,
})
export class VacanciesFilterPipe implements PipeTransform {
  transform(vacancies: Vacancy[], value: string | null): Vacancy[] {
    if (value) {
      return vacancies.filter((el) => el.name.includes(value));
    }

    return vacancies;
  }
}
