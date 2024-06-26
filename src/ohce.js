import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class Ohce {
    async execute(nombre) {
        console.log(`Buenos dias ${nombre}`)

        while (true) {
            const answer = await readLine();
            if (answer === "Stop!") {
                break
            }
            let reversed = answer.split("").reverse().join("");
            console.log(reversed)
        } 
    }

}

async function readLine() {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('');
    rl.close();

    return answer;
}