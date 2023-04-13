class Property {
    area:number;
    price:number;
    constructor(area:number, price:number){
        this.area= area
        this.price = price
    }
    //métodos
    getPriceSquareMeter(){
        this.price / this.area 
    }
}
class House extends Property {
    
}
const land = new Property(200, 5000);
const someHouse = new House(120,69000);

console.log(land)
console.log(someHouse)

class Apartment extends Property {
    number: number;
    constructor(number:number,area:number, price:number){
       super(area, price) 
       this.number = number
    }
    getFloor(){
        return this.number
    }
}
const apt = new Apartment(201, 100,160000)
