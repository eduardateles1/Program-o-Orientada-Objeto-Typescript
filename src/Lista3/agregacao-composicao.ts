// Classe Parte
class Product{
    constructor(private product: Product, private name: string, private price: number){

    }
    getPrice():number{
        return this.price
    }
    //Método que converte objeto em uma string
  
}
// Classe toda
class carItem {
    constructor(private product: Product,private qtd: number){

    }
    addItem(item:carItem): void {
        this.carItens.push(item)
    }
    toString(): string {
        return (`Product ${this.product.toString()}, Qunatity ${this.quantity.toString()}, Price: ${this.price.calculatePrice()}`)
    }
    calculatePrice(): number{
        return(this.qtd *this.product.getPrice())
    }
}
let objProduct = new Product('bola de basquete', 100)
let objcarItem = new carItem(objProduct,2)
console.log(objcarItem.calculatePrice())

//class todo para relção com carItem
class shoppingCart {
    constructor(private id: number, private items: carItem[]){
}

let objshoppingCart = new shoppingCart(1, []) //carrinho de compra iniciado vazio
objshoppingCart.addItem(objcarItem)


//Criação de novos produtos
let objProduct = new Product('Bola de basquete', 100)
let obj2CarItem = new carItem("Alexa", 400)
 

