class Cliente2 {
    private _numeroConta: string;
    private _numeroAgencia: string;
    private _nome: string;
    private _saldo: number;

    //constructors
    constructor(numeroConta: string, numeroAgencia: string, nome: string, saldo: number) {
        this._numeroConta = '';
        this._numeroAgencia = '';
        this._nome = 'Ana';
        this._saldo = 0;
    }
    //getters & setters
    get numeroConta(): string {
        return this._numeroConta;
    }
    set numeroConta(numeroConta: string) {
        if (numeroConta.length !== 9 || numeroConta[8] !== '-') {
            alert('O número da conta deve ter tamanho 8, contando o traço do dígito verificador.');
        }
        this._numeroConta = numeroConta;
    }
    get numeroAgencia(): string {
        return this._numeroAgencia;
    }

    set numeroAgencia(numeroAgencia: string) {
        if (numeroAgencia.length !== 7 || numeroAgencia[6] !== '-') {
            throw new Error('O número da agência deve ter tamanho 6, contando o traço do dígito verificador.');
        }
        this._numeroAgencia = numeroAgencia;
    }
    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        if (nome.length > 30) {
            alert('O nome do cliente não pode ultrapassar 30 caracteres.');
        }
        this._nome = nome;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this._saldo = saldo;
    }


    //Métodos
    public realizarDeposito(valor: number): void {
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
    obterInformacoesConta(): void {
        console.log(`Conta: ${this.numeroConta} | Agência: ${this.numeroAgencia} | Nome: ${this.nome} | Saldo: R$ ${this.saldo.toFixed(2)}`);
    }

}
let obj1Cliente2 = new Cliente2('1234567-8', '12345-6', 'Fulano', 1000);

obj1Cliente2.realizarDeposito(500);
obj1Cliente2.realizarSaque(200);
obj1Cliente2.obterInformacoesConta();

let obj2Cliente2 = new Cliente2('158696', '12345-6', 'Paulo', 1000);
obj2Cliente2.realizarDeposito(500);
obj2Cliente2.realizarSaque(200);
obj2Cliente2.obterInformacoesConta();



