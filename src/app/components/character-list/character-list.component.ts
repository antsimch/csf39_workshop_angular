import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelCharacter } from 'src/app/models';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: MarvelCharacter[] = []

  constructor(
    private searchSvc: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params['name']
    this.searchSvc.getCharacters(name)
      .then(
        result => {
          this.characters = result
          console.log(this.characters)
        })
  }
}
