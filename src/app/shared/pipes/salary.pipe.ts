import { Pipe, PipeTransform } from '@angular/core';
import { Salary, Vacancy } from '../../interfaces/vacancies.interface';

@Pipe({
  name: 'salaryPipe',
  standalone: true,
})
export class SalaryPipe implements PipeTransform {
  transform(value: Salary): string {
    if (value.from && !value.to) {
      return `от ${value.from}`;
    }
    if (value.from && value.to) {
      return `${value.from} - ${value.to}`;
    }
    return '';
  }
}
