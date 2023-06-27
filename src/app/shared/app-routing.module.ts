import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';
import { FormComponent } from '../components/form/form.component';
import { CharactersComponent } from '../components/characters/characters.component';

const routes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/:id', component: CharactersComponent},
  { path: 'form', component: FormComponent},
  { path: 'form/:id', component: FormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
