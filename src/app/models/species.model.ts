import { Deserializable } from './deserializable.model';

export class Species implements Deserializable{
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string; 
    people: string[];
    films: string[]; 
    created:  string; 
    edited:  string;
    url: string;

    deserialize(input: any): this {
        Object.assign(this, input);

        this.films = input.films.map((element: string) => {
            let lengthString = element.length;
            return element.substring(27, lengthString - 1);
        });

        this.people = input.people.map((element: string) => {
            let lengthString = element.length;
            return element.substring(28, lengthString - 1);
        });

        this.url = input.url.substring(29, input.url.length - 1);
        this.homeworld = input.homeworld.substring(29, input.homeworld.length - 1);
        return this;
    }
}
