var spaceships = [];
function Savespaceship(name, pilot, crewLimit) {
    var newSpaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(newSpaceship);
    alert("A nave foi ".concat(newSpaceship.name, " comandada pelo Piloto ").concat(newSpaceship.pilot, " foi enviada em uma miss\u00E3o"));
    return newSpaceship;
}
//segunda função
function addMember(spaceshipName, crewMemberName) {
    var spaceship = spaceships.find(function (s) { return s.name === spaceshipName; });
    if (spaceship) {
        if (spaceship.crew.length < spaceship.crewLimit) {
            spaceship.crew.push(crewMemberName);
            console.log("Membro ".concat(crewMemberName, " adicionado \u00E0 tripula\u00E7\u00E3o da nave ").concat(spaceshipName, "."));
        }
        else {
            console.log("A tripula\u00E7\u00E3o da nave ".concat(spaceshipName, " j\u00E1 est\u00E1 completa."));
        }
    }
    else {
        console.log("Nave ".concat(spaceshipName, " n\u00E3o encontrada."));
    }
}
//Terceira função
function sendSpaceshipInMission(spaceshipName) {
    var spaceship = spaceships.find(function (s) { return s.name === spaceshipName; });
    if (spaceship) {
        if (!spaceship.inMission && spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
            spaceship.inMission = true;
            console.log("A nave ".concat(spaceshipName, " foi enviada em miss\u00E3o."));
        }
        else if (spaceship.inMission) {
            console.log("A nave ".concat(spaceshipName, " j\u00E1 est\u00E1 em miss\u00E3o."));
        }
        else {
            console.log("N\u00E3o \u00E9 poss\u00EDvel enviar a nave ".concat(spaceshipName, " em miss\u00E3o. \u00C9 necess\u00E1rio ter pelo menos ").concat(Math.floor(spaceship.crewLimit / 3), " membros na tripula\u00E7\u00E3o."));
        }
    }
    else {
        console.log("Nave ".concat(spaceshipName, " n\u00E3o encontrada."));
    }
}
//Listar as naves
function listSpaceships() {
    console.log('Lista de naves registradas:');
    spaceships.forEach(function (spaceship) {
        console.log("Nome: ".concat(spaceship.name, " | Piloto: ").concat(spaceship.pilot, " | Tripula\u00E7\u00E3o: ").concat(spaceship.crew.join(', '), " | Em miss\u00E3o: ").concat(spaceship.inMission));
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
