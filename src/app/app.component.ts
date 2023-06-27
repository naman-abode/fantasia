import { Component } from '@angular/core';
import { CharacterService } from './shared/services/character.service';
import { Character } from './shared/models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fantasia · Accueil';
}
