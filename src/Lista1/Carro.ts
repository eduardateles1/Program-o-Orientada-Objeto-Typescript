class Carro{
    //Declaração das variáveis
    modelo: string;
    velocidade: number;
    motor: boolean

    //ligando o carro
    Ligar(){
        this.motor = true
    }
    //Desligando o carro
    Desligar(){
        this.motor = false
    }
    //Acelerando o carro
    Acelerar(x: number){
        this.velocidade = this.velocidade + x
    }
    Frear(x: number){
        this.velocidade = this.velocidade - x


    }
}
//Criando objetos
let obj1= new Carro()
obj1.modelo= 'Onix'
obj1.velocidade= 0
obj1.motor=false
console.log(obj1)

let obj2 = new Carro()
obj2.modelo= 'Gol'
obj2.velocidade= 60
obj2.motor=false
console.log(obj2)

//Ligando o motor do obj1
obj1.Ligar()
//Acelerando o motor do obj1 em 40km
obj1.Acelerar(40)
console.log(obj1)
//Desligando o obj2

obj2.Desligar()
obj2.Frear(obj2.velocidade)
console.log(obj2)