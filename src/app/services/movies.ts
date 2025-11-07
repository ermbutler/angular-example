import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public searchTerm: string = 'Aliens';
  private apiUrlBase: string = `${environment.apiUrl}/?apikey=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getMoviesBySearchTerm(searchTerm: string): Observable<Movie[]> {
    const url: string = `${this.apiUrlBase}&type=movie&s=${searchTerm}`;
    return this.http.get<Movie[]>(url);
  }

}
