import { Deserializable } from './../deserializable.model';

export class Films implements Deserializable{
    title: string; 
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters:string[];
    planets:string[];
    starships:string[];
    vehicles:string[];
    species:string[];
    created: string;
    edited: string;
    url: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.characters = input.characters.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.planets = input.planets.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.starships = input.starships.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.vehicles = input.vehicles.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });        
        this.species = input.species.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });        
        this.url = input.url.replace('https://swapi.co/api','');
        return this;
    }
}
