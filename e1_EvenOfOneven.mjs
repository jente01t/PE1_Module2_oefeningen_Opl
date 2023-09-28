import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Wat is je getal?'));

getal = getal % 2 

if (getal == 0) {
    console.log('Je opgegeven getal is even.');
} else {
    console.log('Je opgegeven getal is oneven.')
}

process.exit();