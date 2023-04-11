import { Animal } from "./Animal";

export class Snake extends Animal{
    private poisonous: boolean
    private snake: boolean
    constructor(name: string, age: number, poisonous: boolean, snake: boolean){
        super(name, age); // chama o construtor da superclasse
        this.poisonous = poisonous; this.snake = snake

    }
    //Anulação de método porque está faltando dados
    toString(): string {
        return (`${super.toString}, Poisonous: ${this.poisonous ?
        'Yes': 'No'} Snake: ${this.snake ? 'Yes': 'No'}`)
    }
    //Anulação de método pq não serve
    move(): string{
        return('Slithering...')
    }
}