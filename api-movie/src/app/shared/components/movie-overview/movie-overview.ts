import { Component, inject } from '@angular/core';
import { MovieService } from '../../../core/services/movie-service';
import { AsyncPipe } from '@angular/common';
import { Navbar } from '../../../features/navbar/navbar';
import { Movie } from '../../../core/interfaces/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-overview',
  imports: [AsyncPipe, Navbar],
  templateUrl: './movie-overview.html',
  styleUrl: './movie-overview.css'
})
export class MovieOverview {

movieService = inject(MovieService)

movies$: Observable<Movie[]> = this.movieService.getPopularMovies()

  // ngOnInit(): void {
  //   this.movieService.getPopularMovies().subscribe(movies => {
  //   console.log(movies); // Check what you're really getting
  //   this.popularMovies = movies;
  //   });
  // }



}


