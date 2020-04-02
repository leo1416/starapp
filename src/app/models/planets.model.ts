import { Deserializable } from './deserializable.model';

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
            let lengthString = element.length;
            return element.substring(28, lengthString - 1);
        });
        this.films = input.films.map((element: string) => {
            let lengthString = element.length;
            return element.substring(27, lengthString - 1);
        });
        this.url = input.url.substring(29, input.url.length - 1);
        return this;
    }
}
