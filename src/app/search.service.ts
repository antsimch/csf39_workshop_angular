import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MarvelCharacter } from './models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  getCharacters(name: string) {
    const params = new HttpParams().set('name', name)
    return lastValueFrom(
        this.http.get<MarvelCharacter[]>('/api/characters', { params }))
  }

  getCharacterById(id: string) {
    return lastValueFrom(this.http.get<any>(`/api/character/${id}`))
  }

  postComment(comment: string, id: string) {
    const payload = {
      characterId: id,
      text: comment
    }
    return lastValueFrom(this.http.post<any>(`/api/character/${id}`, payload))
  }
}
