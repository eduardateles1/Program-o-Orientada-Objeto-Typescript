export class Passenger {
    private id: number; private name: string; private cpf: string
    constructor(id: number, name: string, cpf: string) {
        this.setId(id); this.setName(name); this.setCpf(cpf)

    }
    setId(id: number) {
        if (id <= 100) {
            this.id = id
        } else {
            console.log("Id está errado")
        }
    }
    getid(): number {
        return this.id
    }
    setCpf(cpf: string) {
        this.cpf = cpf
    }
    setName(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    toString(): string {
        return (`Id ${this.id}, Name ${this.name},CPF ${this.cpf} `)

    }

}
let obj = new Passenger(110, "Pedro", "123");
console.log(obj)

