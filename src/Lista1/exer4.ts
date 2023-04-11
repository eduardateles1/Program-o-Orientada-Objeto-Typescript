class Rio {
    nome: string;
    nivel: number;
    poluido: boolean;

    //Construtores
    constructor(nome?: string, nivel?: number, poluido?: boolean) {
        this.nome = nome || 'Rio';
        this.nivel = nivel || 0;
        this.poluido = poluido || false;
    }
    //Métodos
    chover(nivel: number) {
        this.nivel += nivel;

    }
    ensolarar(nivel: number) {
        this.nivel -= nivel;
        if (this.nivel < 0) {
            this.nivel = 0;
        }
    }
    limpar() {
        this.poluido = false;
    }
    sujar() {
        this.poluido = true;

    }
    mostrar(): void {
        console.log(`Nome do rio: ${this.nome}, Nível do rio: ${this.nivel}, Poluido :${this.poluido} "Sim" : "Não"`);
    }
}
class testaRio {
    static testar() {
        const rio1 = new Rio('Solimões', 7, true);
        const rio2 = new Rio('Rio Alegria', 8, false);


        rio1.mostrar()
        rio2.mostrar()

        rio1.chover(4)
        rio2.chover(3)

        rio1.ensolarar(2)
        rio2.ensolarar(4)

        rio1.sujar()
        rio2.limpar()



    }


}
testaRio.testar()


