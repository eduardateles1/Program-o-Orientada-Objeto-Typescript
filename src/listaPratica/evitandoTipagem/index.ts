//tipos opcionais
function sendSPaceship(spaceship:{pilot:string,copilot?:string}){
    //...

}
sendSPaceship({pilot:'hansolo', copilot:'Joao'})
sendSPaceship({pilot:'Luke'})

//Outro exemplo
let input: any //evitar utilizar o any última opção 
input= 'Test'

//Outro exemplo
function verificacao(){
   if(true){

   }else{
    let _check: never
    return _check
   }
}
