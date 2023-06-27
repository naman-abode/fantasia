import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';
import { FormComponent } from '../components/form/form.component';

const routes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'form', component: FormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
