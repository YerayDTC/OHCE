import {Ohce, Logger} from "./ohce.js"

let ohce = new Ohce(new Logger()) // estamos inyectando

let nombre = process.argv[2];
await ohce.execute(nombre)
