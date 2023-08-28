import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelCharacter } from 'src/app/models';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  character: MarvelCharacter = {
    id: 0,
    name: '',
    description: '',
    thumbnail: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchSvc: SearchService,
    private location: Location,
    private router: Router) { }

  postComment(comment: string) {
    this.searchSvc.postComment(comment, this.character.id.toString())
        .then(
          result => {
            this.router.navigate(['/character', this.character.id])
          }
        )
  }

  goBack() {
    this.location.back()
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.searchSvc.getCharacterById(id)
        .then(
            result => {
                this.character = result['character']
                console.log(this.character)
            }
        )
  }
}
