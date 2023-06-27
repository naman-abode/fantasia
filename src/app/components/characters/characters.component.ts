import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character';
import { CharacterService } from '../../shared/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  character: Character | null = null;

  constructor(
    private _characterService: CharacterService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    if (id) {
      this._characterService
      .read(id)
      .subscribe((character: Character) => {
        this.characters = Array(character);
      });
    } else {
      this._characterService
      .readAll()
      .subscribe((characters: Character[]) => {
        this.characters = characters;
      });
    }
  }

  openForm():void {
    this._router.navigate(['form']);
  }

  updateCharacter(id: string|undefined) {
    this._router.navigate(['form', id]);
  }
  
  deleteCharacter(id: string|undefined) {
    this._characterService.delete(id).subscribe();
    location.reload();
  }
}
