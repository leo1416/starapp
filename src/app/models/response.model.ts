import { Deserializable } from './deserializable.model';

export class Response implements Deserializable{

    count: number;
    next: string;
    previous: string;
    results:any[];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}