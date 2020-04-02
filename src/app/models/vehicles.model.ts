import { Deserializable } from './deserializable.model';

export class Vehicles implements Deserializable{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.films = input.films.map((element: string) => {
            let lengthString = element.length;
            return element.substring(27, lengthString - 1);
        });

        this.pilots = input.pilots.map((element: string) => {
            let lengthString = element.length;
            return element.substring(25, lengthString - 1);
        });
        this.url = input.url.substring(30, input.url.length - 1);

        return this;
    }
}
