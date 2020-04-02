import { Deserializable } from './deserializable.model';

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
            let lengthString = element.length;
            return element.substring(27, lengthString - 1);
        });
        this.species = input.species.map((element: string) => {
            let lengthString = element.length;
            return element.substring(29, lengthString - 1);
        });
        this.vehicles = input.vehicles.map((element: string) => {
            let lengthString = element.length;
            return element.substring(30, lengthString - 1);
        });
        this.starships = input.starships.map((element: string) => {
            let lengthString = element.length;
            return element.substring(31, lengthString - 1);
        });
        
        this.url = input.url.substring(28, input.url.length - 1);
        this.homeworld = input.homeworld.substring(29, input.homeworld.length - 1);

        return this;
    }


}
