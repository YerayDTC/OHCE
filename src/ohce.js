import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class Ohce {

    constructor() {
        this.logger = new Logger()
    }

    async execute(nombre) {
        this.logger.log(`Buenos dias ${nombre}`)

        while (true) {
            const answer = await readLine();
            if (answer === "Stop!") {
                break
            }
            let reversed = answer.split("").reverse().join("");
            this.logger.log(reversed)
        }
    }

}

async function readLine() {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('');
    rl.close();

    return answer;
} 

/*1 sacar a una clase
    2 separar las responsabilidades, leer cosas en consola  */


class Logger {
    log(str){
        console.log(str);
    }
}