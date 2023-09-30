import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:url';
const userInput = readline.createInterface({input, output});

let var1 = 11;
let var2 = '11';

if (var1 === var2) { // === staat voor iedentiek, ook het type (hier is het type getal vs string)
    console.log('Ze zijn gelijk');
} else {
    console.log('Ze zijn niet gelijk.');
}

process.exit();