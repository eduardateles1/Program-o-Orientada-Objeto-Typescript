class Retangulo {
    public base: number;
    public altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    //getters e setters
    getBase(): number {
        return this.base;
    }

    setbase(novaBase: number) {
        this.base = novaBase;
    }

    geAltura(): number {
        return this.altura;
    }

    setAltura(novaAltura: number) {
        this.altura = novaAltura;
    }

    public area(): number {
        return this.base * this.altura;
    }

    public perimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

class Circulo {
    public raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }
    //getters e setters
    getRaio(): number {
        return this.raio;
    }

    setRaio(novoRaio: number) {
        this.raio = novoRaio;
    }

    public area(): number {
        return Math.PI * this.raio ** 2;
    }

    public circunferencia(): number {
        return 2 * Math.PI * this.raio;
    }
}
//testar o código
class Testar {
    public static main(): void {
        const retangulo = new Retangulo(3, 4);
        const circulo = new Circulo(5);

        console.log("Retângulo:");
        console.log(`Base: ${retangulo.base}`);
        console.log(`Altura: ${retangulo.altura}`);
        console.log(`Área: ${retangulo.area()}`);
        console.log(`Perímetro: ${retangulo.perimetro()}`);

        console.log("Círculo:");
        console.log(`Raio: ${circulo.raio}`);
        console.log(`Área: ${circulo.area()}`);
        console.log(`Circunferência: ${circulo.circunferencia()}`);
    }
}

Testar.main();
