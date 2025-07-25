import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Movie } from '../interfaces/Movie';
import { MovieDetailsId } from '../interfaces/MovieId';

const API_KEY = environment.TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const BASE_URL_ID = 'https://api.themoviedb.org/3/movie'



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  getPopularMovies(): Observable<Movie[]> {
    const url = `${BASE_URL}?api_key=${API_KEY}`;
    return this.http.get<{results: Movie[] }>(url).pipe(
      map(response => response.results), // ensures it's always an array
      catchError(error => {
        console.error('Failed to fetch popular movies:', error);
        return of([]); // fallback to empty array
      })
    );
  }

  getMovieById(id: number): Observable<MovieDetailsId> {
    const url = `${BASE_URL_ID}/${id}?api_key=${API_KEY}&language=en-US`;
    return this.http.get<MovieDetailsId>(url);

}


}
