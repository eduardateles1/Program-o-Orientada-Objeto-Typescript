class Cliente {
    numeroConta: number;
    numeroAgencia: number;
    nome: string;
    saldo: number;
    
    //Construtores
    constructor(numeroConta: number, numeroAgencia: number, nome: string, saldo: number) {
      this.numeroConta = numeroConta =23454-8;
      this.numeroAgencia = numeroAgencia =1465-12;
      this.nome = nome ='Maria';
      this.saldo = saldo =1500;
    
    
    }
    //Métodos
    realizarDeposito(valor: number): void {
      this.saldo += valor;
    }
  
    realizarSaque(valor: number): boolean {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return true;
      } else {
        return false;
      }
    }
  
    obterInformacoesConta(): string {
      return `Conta: ${this.numeroConta} | Nome: ${this.nome} | Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
  }
  //teste do código
  const teste = new Cliente(23454-8,1465-12, 'Maria',1500);
  console.log(teste.realizarSaque);




  class TestaCliente {
    constructor() {
      const fulano = new Cliente(1234, 5678, 'Fulano', 1000);
      const beltrano = new Cliente(4321, 8765, 'Beltrano', 500);
      console.log(fulano.obterInformacoesConta());
      console.log(beltrano.obterInformacoesConta());
      fulano.realizarDeposito(500);
      beltrano.realizarDeposito(1000);
      fulano.realizarSaque(200);
      beltrano.realizarSaque(700);
      console.log(fulano.obterInformacoesConta());
      console.log(beltrano.obterInformacoesConta());
    }
  }
  
  new TestaCliente();
  