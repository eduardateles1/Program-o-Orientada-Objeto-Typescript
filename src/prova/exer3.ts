class Funcionario {
    protected name: string;
    protected salario: number;

    //Constructor
    constructor(name:string, salario:number){
        this.name= name;
        this.salario= salario;

    }
    //getters & setter
    public setName(name:string){
        this.name= name
    }
    public getName():string{
        return this.name
    }
     public setSalario(salario:number){
        this.salario = salario
     }
    public getSalario():number{
        return this.salario
    }
    public calcularSalario(): number {
        return this.salario
      }
    public mostrarDados(): void {
        console.log(`Nome: ${this.name} - Salário: ${this.salario}`);
      }
}
class Gerente extends Funcionario {
    private bonificacao: number;

    constructor(name:string, salario:number, bonificacao:number){
       super(name,salario);
       this.bonificacao = bonificacao
    }

    //getters and setters
    public setBonificacao(bonificacao:number){
        this.bonificacao = bonificacao
    }
    public getBonificacao():number{
        return this.bonificacao
    }
    public calcularSalario(): number {
        return this.salario + this.bonificacao
    }
}
class Programador extends Funcionario{
    private linguagem:string;

    constructor(name:string, salario:number, linguagem:string){
        super(name,salario);
        this.linguagem = linguagem
    }
    //getters and setters
    public setLinguagem(linguagem: string) {
        this.linguagem = linguagem
      }
    
      public getlinguagem(): string {
        return this.linguagem
      }
    
      public calcularSalario(): number {
        return this.salario * 1.2
      }
}
class Testa {
    public static Testar(funcionario:Funcionario):void{
        funcionario.mostrarDados();
        console.log(`Salário calculado: ${funcionario.calcularSalario()}`)
    }
}

//Mostrar
const gerente = new Gerente('João', 5000,2000);
const programador = new Programador('Maria Eduarda',3000,'ReactJs')

Testa.Testar(gerente);
Testa.Testar(programador);