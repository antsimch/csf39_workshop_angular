import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCharacterComponent } from './components/search-character/search-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';

const routes: Routes = [
  { path: '', component: SearchCharacterComponent },
  { path: 'characters/:name', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'character/comment/:id', component: CreateCommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
