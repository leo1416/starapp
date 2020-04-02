import { Deserializable } from './deserializable.model';

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
            let lengthString = element.length;
            return element.substring(28, lengthString - 1);
        });
        this.planets = input.planets.map((element: string) => {
            let lengthString = element.length;
            return element.substring(29, lengthString - 1);
        });
        this.starships = input.starships.map((element: string) => {
            let lengthString = element.length;
            return element.substring(31, lengthString - 1);
        });
        this.vehicles = input.vehicles.map((element: string) => {
            let lengthString = element.length;
            return element.substring(30, lengthString - 1);
        });        
        this.species = input.species.map((element: string) => {
            let lengthString = element.length;
            return element.substring(29, lengthString - 1);
        });        
        this.url = input.url.substring(27, input.url.length - 1);
        return this;
    }
}
