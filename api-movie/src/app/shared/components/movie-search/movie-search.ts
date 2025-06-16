import { Component, inject } from '@angular/core';
import { MovieService } from '../../../core/services/movie-service';
import { Movie } from '../../../core/interfaces/Movie';
import { AsyncPipe} from '@angular/common';
import { Navbar } from '../../../features/navbar/navbar';
import { Observable, map, debounceTime, distinctUntilChanged, Subject, switchMap, startWith } from 'rxjs';
import { RouterLink} from '@angular/router';
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-movie-search',
  imports: [AsyncPipe, Navbar, RouterLink, SearchBar],
  templateUrl: './movie-search.html',
  styleUrl: '../../../app.css'
})

export class MovieSearch {

  private searchTerm$ = new Subject<string>();

  movieService = inject(MovieService);

  movies$: Observable<Movie[]> = this.searchTerm$.pipe(
    startWith(''),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(term =>
      this.movieService.getPopularMovies().pipe(
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
