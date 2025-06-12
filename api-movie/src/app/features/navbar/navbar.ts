import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  search = output<string>()

  onInputSearch(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.search.emit(inputValue);
  }
}
