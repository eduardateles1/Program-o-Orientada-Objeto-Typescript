class Aluno {
    //Declaração das Variáveis
    numeroAluno: number;
    nome: string;
    idade: number;
    p1: number;
    p2: number;

    //Construtores
    constructor(numeroAluno: number, nome: string, idade: number, p1: number, p2: number) {
        this.numeroAluno = 7;
        this.nome = 'Ana';
        this.idade = 18;
        this.p1 = 5
        this.p2 = 7
    }
    //Métodos
    notaFinal(): number {
        return (this.p1 + this.p2) / 2;

    }
    dadosAluno(): string {
        return (`Número do aluno: ${this.numeroAluno} | Nome: ${this.nome} | Idade: ${this.idade}`);
    }

    passou(): boolean {
        return this.notaFinal() >= 6;
    }
}
//Testes
const aluno2 = new Aluno(58, 'Isabela', 18, 5.4, 8);
console.log(`A nota final da aluna Isabela é: ${aluno2.notaFinal}`);
console.log(`Dados da aluna: ${aluno2.dadosAluno}`);
    

//Classe testaAluno com método Main
class testaAluno {
    static main(): void {
        const aluno1 = new Aluno(6, 'Isac', 17, 6, 5);
        console.log(`Nota final do aluno: ${aluno1.notaFinal}`)
        console.log(aluno1.dadosAluno);
        console.log(`Passou? ${aluno1.passou()}`);
    }
}
testaAluno.main();
