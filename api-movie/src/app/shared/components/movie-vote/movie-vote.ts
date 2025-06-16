import { Component, inject } from '@angular/core';
import { MovieService } from '../../../core/services/movie-service';
import { AsyncPipe } from '@angular/common';
import { Navbar } from '../../../features/navbar/navbar';
import { Movie } from '../../../core/interfaces/Movie';
import { Observable, map } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-vote',
  imports: [AsyncPipe, Navbar, RouterLink],
  templateUrl: './movie-vote.html',
  styleUrl: './movie-vote.css'
})

export class MovieVote {
  private movieService = inject(MovieService);
  private router = inject(Router);

  movies$: Observable<Movie[]> = this.movieService.getPopularMovies().pipe(
    map(movies => movies.sort((a, b) => b.vote_average - a.vote_average))
  );

  goToOverview(movieId: number): void {
    this.router.navigate(['/movies/overview', movieId]);
  }
}
