import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home' , component:  HomeComponent },
  { path: 'films' , component: FilmsComponent },
  { path: 'people' , component: PeopleComponent },
  { path: 'planets' , component: PlanetsComponent},
  { path: 'species' , component: SpeciesComponent },
  { path: 'starShips' , component: StarShipsComponent},
  { path: 'vehicles' , component: VehiclesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
