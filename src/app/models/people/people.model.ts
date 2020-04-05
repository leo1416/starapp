import { Deserializable } from './../deserializable.model';

export class People implements Deserializable {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    created: string;
    edited: string;
    url: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];

    deserialize(input: any): this {
        Object.assign(this, input);

        this.films = input.films.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.species = input.species.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.vehicles = input.vehicles.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.starships = input.starships.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        
        this.url = input.url.replace('https://swapi.co/api','');
        this.homeworld = input.homeworld.replace('https://swapi.co/api','');

        return this;
    }


}
