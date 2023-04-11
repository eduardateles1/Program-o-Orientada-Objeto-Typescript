import { Animal } from "./Animal";

export class Horse extends Animal{
    private competitor: boolean;
    constructor(name:string, age:number,competitor: boolean){
        super(name,age);
        this.competitor = competitor;


    }
    //getters & setters
    toString():string{
        return(`${super.toString()}Competitor: ${this.competitor ?
        'Yes':'No'}`)
    }
    //Move Anulação de métodos
    move():string{
        return('Galloping...')
    }
}