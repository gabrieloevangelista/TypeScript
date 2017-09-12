import {Spacecraft, ContainerShip} from './base-ships'
import {MillenniumFalcon} from './starfighters'

import * as _ from 'lodash'
console.log(_.pad("TypeScript Examples", 40, "="))


let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob( falcon ) ? 'Yes' : 'No'}`)