import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Data, Vacancy } from '../interfaces/vacancies.interface';

@Injectable({
  providedIn: 'root',
})
export class HhService {
  vacanciesCount: number = 100;
  http = inject(HttpClient);

  getVacancies(): Observable<Vacancy[]> {
    return this.http
      .get<Data>(`https://api.hh.ru/vacancies?per_page=${this.vacanciesCount}`)
      .pipe(map((data: Data) => data.items));
  }

  getVacancyInfo(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`https://api.hh.ru/vacancies/${id}`);
  }
}
