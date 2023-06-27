import { Component } from '@angular/core';
import { Character } from 'src/app/shared/models/character';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  characters: Character[] = [];
  inputCharacter: Character = {
    "nom": "",
    "titre": "",
    "genre": "",
    "classe": ""
  };

  constructor(private _characterService: CharacterService) {}

  createCharacter() {
    this.inputCharacter.id = crypto.randomUUID();
    this._characterService.create(this.inputCharacter).subscribe();
  }

  updateCharacter() {
    this._characterService.update(this.inputCharacter).subscribe();
  }
  
  deleteCharacter(id: string) {
    this._characterService.delete(id).subscribe();
  }
}
