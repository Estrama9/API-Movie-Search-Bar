import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearch } from './shared/components/movie-search/movie-search';

@Component({
  selector: 'app-root',
  imports: [MovieSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
