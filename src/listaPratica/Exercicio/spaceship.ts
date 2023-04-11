type Spaceship = {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  }
let spaceships: Spaceship[] = [];

function Savespaceship(name:string, pilot:string, crewLimit:number){
    const newSpaceship: Spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }
    spaceships.push(newSpaceship);
    alert(`A nave foi ${newSpaceship.name} comandada pelo Piloto ${newSpaceship.pilot} foi enviada em uma missão`)
    return newSpaceship


}
 //segunda função
function addMember(spaceshipName: string, crewMemberName:string):void{
    const spaceship = spaceships.find((s) => s.name === spaceshipName);
    if (spaceship) {
        if (spaceship.crew.length < spaceship.crewLimit) {
          spaceship.crew.push(crewMemberName);
          console.log(`Membro ${crewMemberName} adicionado à tripulação da nave ${spaceshipName}.`);
        } else {
          console.log(`A tripulação da nave ${spaceshipName} já está completa.`);
        }
      } else {
        console.log(`Nave ${spaceshipName} não encontrada.`);
      }
    }
//Terceira função
function sendSpaceshipInMission(spaceshipName: string): void {
    const spaceship = spaceships.find((s) => s.name === spaceshipName);
  
    if (spaceship) {
      if (!spaceship.inMission && spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
        spaceship.inMission = true;
        console.log(`A nave ${spaceshipName} foi enviada em missão.`);
      } else if (spaceship.inMission) {
        console.log(`A nave ${spaceshipName} já está em missão.`);
      } else {
        console.log(`Não é possível enviar a nave ${spaceshipName} em missão. É necessário ter pelo menos ${Math.floor(spaceship.crewLimit / 3)} membros na tripulação.`);
      }
    } else {
      console.log(`Nave ${spaceshipName} não encontrada.`);
    }
  } 
//Listar as naves
function listSpaceships(): void {
    console.log('Lista de naves registradas:');
    spaceships.forEach((spaceship) => {
      console.log(`Nome: ${spaceship.name} | Piloto: ${spaceship.pilot} | Tripulação: ${spaceship.crew.join(', ')} | Em missão: ${spaceship.inMission}`);
    });
  }

//Mostrar
// Salvar uma nova nave
Savespaceship('Enterprise', 'James T. Kirk', 10);

// Adicionar membros à tripulação
addMember('Enterprise', 'Spock');
addMember('Enterprise', 'Nyota Uhura');
addMember('Enterprise', 'Leonard McCoy');
addMember('Enterprise', 'Montgomery Scott');
addMember('Enterprise', 'Hikaru Sulu');
addMember('Enterprise', 'Pavel Chekov');

// Enviar a nave em missão
sendSpaceshipInMission('Enterprise');

// Listar todas as naves registradas
listSpaceships();



