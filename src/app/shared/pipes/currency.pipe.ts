import { Pipe, PipeTransform } from '@angular/core';
import { Salary } from '../../interfaces/vacancies.interface';

@Pipe({
  name: 'salaryCurrencyPipe',
  standalone: true,
})
export class SalaryCurrencyPipe implements PipeTransform {
  private currencySymbols: { [key: string]: string } = {
    RUR: '₽',
    KZT: '₸',
    USD: '$',
    EUR: '€',
    BYR: 'Br',
  };

  transform(value: Salary): string | null {
    const currency = this.currencySymbols[value?.currency] || value?.currency;
    if (value?.from) {
      return currency;
    }
    return null;
  }
}
