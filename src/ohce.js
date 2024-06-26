import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Importa los módulos necesarios de Node.js para la entrada y salida de la consola y para crear interfaces de lectura de línea.

export class Ohce {
    // Define la clase Ohce.

    constructor(logger, reader) {
        this.logger = logger;
        this.reader = reader;
    }
    // El constructor toma dos parámetros: un logger para manejar la salida y un reader para manejar la entrada.
    // Asigna estos parámetros a propiedades de la instancia.

    async execute(nombre) {
        this.logger.log(`Buenos días ${nombre}`);
        // Loggea un saludo utilizando el logger.

        while (true) {
            const answer = await this.reader.readLine();
            // Espera a que el reader lea una línea de la entrada.

            if (answer === "Stop!") {
                this.logger.log(`Adios ${nombre}`);
                break;
            }
            // Si la entrada es "Stop!", loggea una despedida y rompe el bucle.

            let reversed = answer.split("").reverse().join("");
            this.logger.log(reversed);
            // Invierte la cadena de entrada y la loggea.

            if (answer === reversed) {
                this.logger.log('¡Bonita palabra!');
            }
            // Si la entrada es un palíndromo (igual a su reverso), loggea "¡Bonita palabra!".
        }
    }
}

export class Logger {
    log(str) {
        console.log(str);
    }
}
// Define la clase Logger con un método log que imprime una cadena a la consola.

export class ConsoleReader {
    async readLine() {
        const rl = readline.createInterface({ input, output });
        const answer = await rl.question('');
        rl.close();
        return answer;
    }
}
// Define la clase ConsoleReader con un método readLine que:
// 1. Crea una interfaz de lectura de línea.
// 2. Espera a que el usuario introduzca una línea y la retorna.
// 3. Cierra la interfaz de lectura de línea.


/*Resumen de ohce.js
Importaciones:

readline y process son módulos de Node.js utilizados para manejar la entrada y salida de la consola.
Clase Ohce:

Constructor: Toma un logger y un reader como parámetros y los asigna a propiedades de la instancia.
Método execute: Saluda al usuario, invierte las entradas y las loggea, reconoce palíndromos y responde adecuadamente, y termina la ejecución cuando se introduce "Stop!".
Clase Logger:

Método log: Imprime una cadena a la consola.
Clase ConsoleReader:

Método readLine: Crea una interfaz de lectura de línea, espera a que el usuario introduzca una línea y la retorna, luego cierra la interfaz.
Este código define un programa de consola que saluda al usuario, invierte las entradas del usuario, reconoce palíndromos y termina cuando el usuario escribe "Stop!".*/