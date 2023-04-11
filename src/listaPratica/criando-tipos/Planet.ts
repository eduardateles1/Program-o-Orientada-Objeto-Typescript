type coordenadas= [number, number, number,number]
type situation = 'habitado' | 'inabitável' | 'inexplorado' |'habitável'

type Planet = {
    name: string,
    coordenadas: coordenadas,
    situation: situation,
    satelites: string[];

}
const planets: Planet[] = [];

//Atualizar a situação de um determiando planeta
function addPlanet(name:string, coordenadas: coordenadas,sateliteName:string, situation:situation):void{
    planets.push({
        name,
        coordenadas,
        situation,
        satelites: []
      })
    
      alert(`O planeta ${sateliteName} foi salvo com sucesso.`)
}
//encontrar planeta
function findPlanet(name:string){
    const planet = planets.find(planet =>planet.name === name)

    return planet ?? false
}
//atualizar situação
function updateSituation(situation: situation, planet: Planet){
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`)

}
//add satelite
function addSatelite(name:string, planet:Planet){
    planet.satelites.push(name)

    alert(`O satélite ${name} foi adiconado ao planeta ${planet.name}`)

}
//Remover satélite
function removeSatelite(name:string, sateliteName:string):void{
    const planet = planets.find(planet => planet.name === name);
    if (planet) {
        planet.satelites = planet.satelites.filter(satelite => satelite !== sateliteName);
      }
      alert(`O satélite ${sateliteName} foi removido `)
}

//Listar planetas
function listPlanets():void{
    planets.forEach(planet =>{
        console.log(`Planet name: ${planet.name}`);
        console.log(`Coordenadas: ${planet.coordenadas}`);
        console.log(`Situation: ${planet.situation}`);
        console.log(`Satelites: ${planet.satelites.join(', ')}`);   
    });

}

//funções extras
function promptValidSituation() {
    let situation: situation
    let validSituation = false
  
    while (!validSituation) {
      const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')
  
      switch (situationInput) {
        case '1':
          situation = 'habitado'
          validSituation = true
          break;
        case '2':
          situation = 'habitável'
          validSituation = true
          break;
        case '3':
          situation = 'inabitável'
          validSituation = true
          break;
        case '4':
          situation = 'inexplorado'
          validSituation = true
          break;
        default:
          alert('Situação inválida!')
          break;
      }
    }
  }

