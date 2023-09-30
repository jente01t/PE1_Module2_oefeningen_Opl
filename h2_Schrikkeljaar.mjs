import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:url';
const userInput = readline.createInterface({input, output});

let jaar = parseFloat(await userInput.question('Geef een jaartal: '));


if ((jaar % 4 == 0) && (jaar % 100 != 0) || (jaar % 400 == 0) ) {
    console.log(jaar + ' is een schrikkeljaar.');
} else {
    console.log(jaar + ' is geen schrikeljaar');
}

process.exit();