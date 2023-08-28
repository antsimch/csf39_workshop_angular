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

  comments: string[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchSvc: SearchService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.searchSvc.getCharacterById(id)
        .then(
            result => {
                this.character = result['character']
                console.log(this.character)
                this.comments = result['comments']
                console.log(this.comments)
            }
        )
  }
}
