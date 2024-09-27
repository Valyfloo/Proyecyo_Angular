import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getPersonajeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }

  searchPersonajeByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/?name=${name}`);
  }

  getPersonajes(page: number, resultsPerPage: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/?page=${page}`);
  }

  // Nueva función para obtener los episodios
  getEpisodeByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
