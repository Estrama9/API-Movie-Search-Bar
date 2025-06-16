import { Routes } from '@angular/router';
import { MovieSearch } from './shared/components/movie-search/movie-search';
import { MovieDetails } from './shared/components/movie-details/movie-details';
import { MovieOverview } from './shared/components/movie-overview/movie-overview';
import { MovieVote } from './shared/components/movie-vote/movie-vote';

export const routes: Routes = [
  { path: '', component: MovieSearch },
  { path: 'movies/overview', component: MovieOverview },
  // { path: 'movies/overview/:id', component: MovieOverview },
  { path: 'movies/rating', component: MovieVote },
  { path: 'movies/:id', component: MovieDetails } // Keep this last
];
