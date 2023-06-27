import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _baseUrl = environment.urlApi + '/characters'

  constructor(private _http: HttpClient) {}

  create(character: Character) {
    return this._http.post<Character>(this._baseUrl, character);
  }
  
  readAll() {
    return this._http.get<Character[]>(this._baseUrl);
  }
  
  read(id: string) {
    return this._http.get<Character[]>(`${this._baseUrl}/${id}`);
  }

  update(character: Character) {
    return this._http.post<Character>(`${this._baseUrl}/${character.id}`, character);
  }

  delete(id: string) {
    return this._http.delete<Character>(`${this._baseUrl}/${id}`);
  }
}
