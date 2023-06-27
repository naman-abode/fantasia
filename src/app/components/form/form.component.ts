import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character';
import { CharacterService } from '../../shared/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: string | undefined;
  characters: Character[] = [];
  inputCharacter: Character = {
    "nom": "",
    "titre": "",
    "genre": "",
    "classe": ""
  };
  
  constructor(
    private _characterService: CharacterService,
    private _route: ActivatedRoute, 
    private _router: Router 
  ) {}
  
  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    if(this.id) {
      this._characterService
      .read(this.id)
      .subscribe((character: Character) => {
        this.inputCharacter = character;
      });
    }
  }

  submitCharacter() {
    if(this.id) {
      this._characterService.update(this.inputCharacter).subscribe();
      this._router.navigate(['characters']);
    } else {
      this.inputCharacter.id = crypto.randomUUID();
      this._characterService.create(this.inputCharacter).subscribe();
      this.inputCharacter = {
        "nom": "",
        "titre": "",
        "genre": "",
        "classe": ""
      };
    }
  }
}
