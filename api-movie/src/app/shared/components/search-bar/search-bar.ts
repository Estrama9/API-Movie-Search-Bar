import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  search = output<string>()

  onInputSearch(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.search.emit(inputValue);
  }
}
