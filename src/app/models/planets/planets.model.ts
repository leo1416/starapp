import { Deserializable } from './../deserializable.model';

export class Planets implements Deserializable {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.residents = input.residents.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.films = input.films.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });
        this.url = input.url.replace('https://swapi.co/api','');
        return this;
    }
}
