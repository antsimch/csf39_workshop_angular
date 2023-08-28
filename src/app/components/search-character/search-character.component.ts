import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent {

  constructor(private router: Router) {}

  search(name: string) {
    this.router.navigate(['/characters', name])
  }
}
