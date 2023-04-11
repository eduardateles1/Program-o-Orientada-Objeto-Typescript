class Aluno2 {
    private _numeroAluno: number;
    private _nome: string;
    private _idade: number;
    private _p1: number;
    private _p2: number;

    //Constructors
    constructor(numeroAluno: number, nome: string, idade: number, p1: number, p2: number) {
        this._numeroAluno = numeroAluno;
        this._nome = nome;
        this._idade = idade;
        this._p1 = p1;
        this._p2 = p2;
    }

    //getters & setters
    get numeroAluno(): number {
        return this._numeroAluno
    }
    set numeroAluno(_numeroAluno: number) {
        if (_numeroAluno.toString().length !== 6) {
            throw new Error('O número do aluno deve ter tamanho 6');
        }
        this._numeroAluno = _numeroAluno;
    }
    get nomeAluno(): string {
        return this._nome
    }
    set nome(_nome: string) {
        if (_nome.length > 30) {
            throw new Error('O nome do aluno não pode ultrapassar 30 caracteres.');
        }
        this._nome = _nome;
    }
    get idade(): number {
        return this._idade
    }
    set idade(idade: number) {
        if (idade < 0) {
            throw new Error('A idade do aluno não pode ser negativa.');
        }
        this._idade = idade;
    }
    get p1(): number {
        return this._p1
    }
    set p1(p1: number) {
        if (p1 < 0) {
            throw new Error('A nota não pode ser negativa')
        }
        this._p1 = p1;
    }
    get p2(): number {
        return this._p1
    }
    set p2(p2: number) {
        if (p2 < 0) {
            throw new Error('A nota não pode ser negativa')
        }
        this._p2 = p2;
    }



    //Métodos
    notaFinal(): number {
        return (this._p1 + this._p2) / 2;

    }
    dadosAluno(): string {
        return (`Número do aluno: ${this.numeroAluno} | Nome: ${this.nome} | Idade: ${this.idade} `);
    }

}
class TesteAluno {
    static main(): void {
        const aluno1 = new Aluno2(6, 'Isac', 17, 6, 5);
        console.log(`Nota final do aluno: ${aluno1.notaFinal}`)
        console.log(aluno1.dadosAluno);
    }
}
TesteAluno.main()