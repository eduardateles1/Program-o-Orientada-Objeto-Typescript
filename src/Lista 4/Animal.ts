export class Animal{
    protected name: string 
    protected age: number
    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
    //getters & setters
    toString(){
        return(`Name: ${this.name}, Age: ${this.age}`)
    }
    //Move
    move():string{
        return 'Moving .....'
    }

}
