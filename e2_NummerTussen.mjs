import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 2
let maximum = 15
let getalGebruiker = parseFloat(await userInput.question('Wat is je getal?'));

if ((getalGebruiker >= minimum) && (getalGebruiker <= maximum)) {
    console.log('Je getal ' + getalGebruiker + ' ligt tussen ' + minimum + ' en ' + maximum);
} else {
    console.log('Je getal ' + getalGebruiker + ' ligt niet tussen ' + minimum + ' en ' + maximum);
}

process.exit();