import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCharacterComponent } from './components/search-character/search-character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCharacterComponent,
    CharacterDetailsComponent,
    CreateCommentComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
