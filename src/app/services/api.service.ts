import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../models/response.model';
import { People } from '../models/people/people.model';
import { Planets } from '../models/planets/planets.model';
import { Films } from '../models/films/films.model';
import { Species } from '../models/species/species.model';
import { Vehicles } from '../models/vehicles/vehicles.model';
import { Starships } from '../models/startships/starships.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  /**
   * retorna todos los people
   * @param url si se envia url seria para la página siguiente
   */
  public getAllPeople(url: string = ''): Observable<Response> {
    url = url === '' ? "http://swapi.py4e.com/api/people/" : url;
    return this.httpService.get<Response>(url).pipe(
      map(data => {
        data.results = data.results.map(data => new People().deserialize(data))
        return new Response().deserialize(data)
      })
    );
  }

  /**
   *
   * @param id identificador
   */
  public getPeopleId(id: string): Observable<People> {
    let url = "http://swapi.py4e.com/api/people/" + id;
    return this.httpService.get<People>(url).pipe(
      map(data => new People().deserialize(data))
    );
  }

  /**
   * retorna todos los planets
   * @param url si se envia url seria para la página siguiente
   */
  public getAllPlanets(url: string = ''): Observable<Response> {
    url = url == '' ? "http://swapi.py4e.com/api/planets/" : url;

    return this.httpService.get<Response>(url).pipe(
      map(data => {
        data.results = data.results.map(data => new Planets().deserialize(data))
        return new Response().deserialize(data)
      })
    );
  }

  /**
   *
   * @param id identificador
   */
  public getPlanetId(id: string): Observable<Planets> {
    let url = "http://swapi.py4e.com/api/planets/" + id;
    return this.httpService.get<Response>(url).pipe(
      map(data => new Planets().deserialize(data))
    );
  }

  /**
   * retorna todos los films
   * @param url si se envia url seria para la página siguiente
   */
  public getAllFilms(url: string = ''): Observable<Response> {
    url = url == '' ? "http://swapi.py4e.com/api/films/" : url;

    return this.httpService.get<Response>(url).pipe(
      map(data => {
        data.results = data.results.map(data => new Films().deserialize(data))
        return new Response().deserialize(data)
      })
    );
  }

  /**
   *
   * @param id identificador
   */
  public getFilmId(id: string): Observable<Films> {
    let url = "http://swapi.py4e.com/api/films/" + id;
    return this.httpService.get<Films>(url).pipe(
      map(data => new Films().deserialize(data))
    );
  }

  /**
   * retorna todos las species
   * @param url si se envia url seria para la página siguiente
   */
  public getAllSpecies(url: string = ''): Observable<Response> {
    url = url == '' ? "http://swapi.py4e.com/api/species/" : url;

    return this.httpService.get<Response>(url).pipe(
      map(data => {
        data.results = data.results.map(data => new Species().deserialize(data))
        return new Response().deserialize(data)
      })
    );
  }

  /**
   *
   * @param id identificador
   */
  public getSpecieId(id: string): Observable<Species> {
    let url = "http://swapi.py4e.com/api/species/" + id;
    return this.httpService.get<Species>(url).pipe(
      map(data => new Species().deserialize(data))
    );
  }

  /**
   * retorna todos los vehicles
   * @param url si se envia url seria para la página siguiente
   */
  public getAllVehicles(url: string = ''): Observable<Response> {
    url = url == '' ? "http://swapi.py4e.com/api/vehicles/" : url;

    return this.httpService.get<Response>(url).pipe(
      map(data => {
        data.results = data.results.map(data => new Vehicles().deserialize(data))
        return new Response().deserialize(data)
      })
    );
  }

  /**
   *
   * @param id identificador
   */
  public getVehicleId(id: string): Observable<Vehicles> {
    let url = "http://swapi.py4e.com/api/vehicles/" + id;
    return this.httpService.get<Vehicles>(url).pipe(
      map(data => new Vehicles().deserialize(data))
    );
  }

  /**
   * retorna todos las starships
   * @param url si se envia url seria para la página siguiente
   */
  public getAllStarships(url: string = ''): Observable<Response> {
    url = url == '' ? "http://swapi.py4e.com/api/starships/" : url;

    return this.httpService.get<Response>(url).pipe(
      map(data => {
        data.results = data.results.map(data => new Starships().deserialize(data))
        return new Response().deserialize(data)
      })
    );
  }

  /**
   *
   * @param id identificador
   */
  public getStarShipId(id: string): Observable<Starships> {
    let url = "http://swapi.py4e.com/api/starships/" + id;
    return this.httpService.get<Starships>(url).pipe(
      map(data => new Starships().deserialize(data))
    );
  }
}
