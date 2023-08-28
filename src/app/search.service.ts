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
    return lastValueFrom(this.http.get<MarvelCharacter>(`/api/character/${id}`))
  }
}
