var Cliente = /** @class */ (function () {
    function Cliente(numeroConta, numeroAgencia, nome, saldo) {
        this.numeroConta = numeroConta = 23454 - 8;
        this.numeroAgencia = numeroAgencia = 1465 - 12;
        this.nome = nome = 'Maria';
        this.saldo = saldo = 1500;
    }
    Cliente.prototype.realizarDeposito = function (valor) {
        this.saldo += valor;
    };
    Cliente.prototype.realizarSaque = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    };
    Cliente.prototype.obterInformacoesConta = function () {
        return "Conta: ".concat(this.numeroConta, " | Nome: ").concat(this.nome, " | Saldo: R$ ").concat(this.saldo.toFixed(2));
    };
    return Cliente;
}());
//teste do código
var teste = new Cliente(23454 - 8, 1465 - 12, 'Maria', 1500);
console.log(teste.realizarSaque);
var TestaCliente = /** @class */ (function () {
    function TestaCliente() {
        var fulano = new Cliente(1234, 5678, 'Fulano', 1000);
        var beltrano = new Cliente(4321, 8765, 'Beltrano', 500);
        console.log(fulano.obterInformacoesConta());
        console.log(beltrano.obterInformacoesConta());
        fulano.realizarDeposito(500);
        beltrano.realizarDeposito(1000);
        fulano.realizarSaque(200);
        beltrano.realizarSaque(700);
        console.log(fulano.obterInformacoesConta());
        console.log(beltrano.obterInformacoesConta());
    }
    return TestaCliente;
}());
new TestaCliente();