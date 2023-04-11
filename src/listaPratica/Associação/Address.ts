export class Address {
    neighbourhood: String;
    number: Number;
    state: string;
    city: string;
    street: String;
    constructor(street:String, number:Number, neighbourhood:String, city: string, state: string){
        this.street = street;
        this.number = number;
        this.neighbourhood = neighbourhood
        this.state = state
        this.city = city
    }
    //Métodos
    fullAddress() {
        return `Rua ${this.street}, n° ${this.number}, ${this.neighbourhood}, ${this.city}, ${this.city}`
    }
}
module.exports = Address