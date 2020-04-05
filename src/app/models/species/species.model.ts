import { Deserializable } from './../deserializable.model';

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
            return element.replace('https://swapi.co/api','');
        });

        this.people = input.people.map((element: string) => {
            return element.replace('https://swapi.co/api','');
        });

        this.url = input.url.replace('https://swapi.co/api','');
        this.homeworld = input.homeworld.replace('https://swapi.co/api','');
        return this;
    }
}
