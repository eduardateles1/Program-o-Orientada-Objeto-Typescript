import { Horse } from "./Horse";
import { Snake } from "./Snake";
import { Animal } from "./Animal";

//Instanciar os objetos das classes snake e horse
let objSnake = new Snake('Cobra', 5, true,false)
let objHorse = new Horse('Cavalo', 3, false)

 function mostraDados(camaleao:Animal){
    console.log(camaleao.toString())
    console.log(camaleao.move())
}
mostraDados(objHorse)
mostraDados(objSnake)

//Outro exemplo de polimorfismo
let vetorAnimal: Animal[] = []
vetorAnimal.push(new Snake('Popcorn',4,false,true))
vetorAnimal.push(new Horse('Little Pony',6,false))

//herança
//polimorfismo
//getters e setters