function sendSpaceship(name:string, capitain:string){
    const spaceship = {
        name,
        capitain,
        speed:20,
        inMission:true,
        crew: []

    }
    alert(`A nave foi ${spaceship.name} comandada pelo cpitão ${spaceship.capitain} foi enviada em uma missão`)
    return spaceship

}
function accelerate(targetSpeed:number, spaceship:{name:string, speed:number}){
    if(spaceship.speed > targetSpeed){
        alert(`Reduzindo  a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else if(spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    }else{
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }
}
const spaceshipName = prompt('Insira o nome da nave a ser enviado: ')
const spaceshipCapitain = prompt('Insira o nome do capitão da nave: ')

// const currentShip = sendSpaceship(spaceshipName,spaceshipCapitain)

const speed =Number (prompt('Insira a velocidade para qual deseja acelerar: '))

// accelerate(speed, currentShip)

