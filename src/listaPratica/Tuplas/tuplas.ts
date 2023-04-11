let point: [number, number, string, boolean]
point = [2,5,'test', true]

//Desestruturação
let [x,y] = point

//ENUM
//Serve para referenciar valores específicos 
enum Planets{
    MERCURIO =  'Mercúrio',
    VENUS ='Venus',
    TERRA = 'Terra',
    MARTE = 'Marte'
}
Planets.TERRA
