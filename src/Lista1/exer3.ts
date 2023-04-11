class Produto {
    //Variáveis
    id: number;
    descricao: string;
    qtd: number;
    preco: number;

    //Construtores
    constructor(id?: number, descricao?: string, qtd?: number, preco?: number) {
        this.id = id || 0;
        this.descricao = descricao || "";
        this.qtd = qtd || 0;
        this.preco = preco || 0.0;
    }

    //Métodos
    comprar(x: number): void {
        this.qtd += x;
    }
    vender(x: number): void {
        if (this.qtd >= x) {
            this.qtd -= x;
        } else {
            console.log("Não é possível vender mais do que a quantidade em estoque.");
        }
    }

    subir(x: number): void {
        this.preco += x;
    }
    descer(x: number): void {
        if (this.preco >= x) {
            this.preco -= x;
        } else {
            console.log("Não é possível baixar mais do que o preço atual.");
        }
    }
    mostra(): void {
        console.log(`ID: ${this.id}, Descrição: ${this.descricao},Quantidade em estoque: ${this.qtd},Preço: ${this.preco}`);

    }
}
//Testes
class testaProduto {
    produto1: Produto
    produto2: Produto

    constructor() {
        this.produto1 = new Produto(1, "Brinco", 10, 29.99);
        this.produto2 = new Produto();
        this.produto2.id = 2;
        this.produto2.descricao = "Argola";
        this.produto2.qtd = 5;
        this.produto2.preco = 59.99;
    }

    testar(): void {
        this.produto1.comprar(5);
        this.produto1.vender(2);
        this.produto1.subir(10);
        this.produto1.descer(5);
        this.produto1.mostra();

        this.produto2.comprar(3);
        this.produto2.vender(7);
        this.produto2.subir(20);
        this.produto2.descer(30);
        this.produto2.mostra();
    }
}


