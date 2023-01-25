export class Product {
    
    constructor (private id: string, private name: string, private price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    
    }

    public getId():string {
        return this.id
    }

    public getName():string{
        return this.name
    }

    public getPrice():number{
        return this.price
    }
}