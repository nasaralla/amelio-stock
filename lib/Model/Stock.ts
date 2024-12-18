export interface StockStruct {
    name: string
    description: string
}

export class Stock implements StockStruct {
    public name: string;
    public description: string;

    constructor(name: string, description: string = "") {
        this.name = name;
        this.description = description;
    }
}