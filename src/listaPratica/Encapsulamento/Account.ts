class Account {
     email:string; 
     #password:string; 
     #balance =0;
    constructor(email:string, password:string, balance:number){
        this.email = email
        this.#password = password
        this.#balance = balance
    }
    user = {
        email: 'maria@gmail.com',
        password: '1234'
    }
    getBalance(email: string, password: string){
        if(this.email === email && this.#password === password){
            return this.#balance
        }else{
           return null
        }
    }
    #authenticated(email:string, password:string){
      return this.email === email && this.#password === password
    }
}
const myAccount = new Account('maria@gmail.com', '1234', 458)
console.log(myAccount.getBalance('maria@gmail.com', '123458'))
