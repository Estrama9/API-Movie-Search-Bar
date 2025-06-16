import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../core/services/movie-service';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Navbar } from '../../../features/navbar/navbar';

@Component({
  selector: 'app-movie-details',
  imports: [AsyncPipe, Navbar],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})

export class MovieDetails {

  route = inject(ActivatedRoute)

  movieService = inject(MovieService)

  movie$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.movieService.getMovieById(id);

    })
  );

}
