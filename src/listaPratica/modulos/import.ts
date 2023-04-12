import { spaceship } from "./export";
import * as lodash from 'lodash'

interface BattleSpaceship extends spaceship {
    weapons: number

}
let swing: BattleSpaceship = {
    name: 'x-wing',
    pilot: 'Lucas',
    speed: 50,
    weapons: 10
}
console.log(lodash.camelCase(swing.pilot))
