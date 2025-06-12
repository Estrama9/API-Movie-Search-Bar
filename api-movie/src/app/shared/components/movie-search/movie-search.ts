import { Component, inject } from '@angular/core';
import { MovieService } from '../../../core/services/movie-service';
import { Movie } from '../../../core/interfaces/Movie';
import { AsyncPipe} from '@angular/common';
import { Navbar } from '../../../features/navbar/navbar';
import { Observable, map, debounceTime, distinctUntilChanged, Subject, switchMap, startWith } from 'rxjs';

@Component({
  selector: 'app-movie-search',
  imports: [AsyncPipe, Navbar],
  templateUrl: './movie-search.html',
  styleUrl: '../../../app.css'
})
export class MovieSearch {

movieService = inject(MovieService);

private searchTerm$ = new Subject<string>();

    movies$: Observable<Movie[]> = this.searchTerm$.pipe(
    startWith(''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(term =>
      this.movieService.getPopularMovies().pipe(
        // filter movies on backend or frontend
        map(movies =>
          movies.filter(movie =>
            movie.title.toLowerCase().includes(term.toLowerCase())
          )
        )
      )
    )
  );

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }
}
