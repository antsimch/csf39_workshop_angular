import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelCharacter } from 'src/app/models';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character: MarvelCharacter = {
    id: 0,
    name: '',
    description: '',
    thumbnail: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchSvc: SearchService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.searchSvc.getCharacterById(id)
        .then(
            result => {
                this.character = result
                console.log(this.character)
            }
        )
  }
}
