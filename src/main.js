import {Ohce} from "./ohce.js"

let ohce = new Ohce()

let nombre = process.argv[2];
await ohce.execute(nombre)
