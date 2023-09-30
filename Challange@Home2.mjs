import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:url';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand: ');
let jaar = parseFloat (await userInput.question('Geef een jaartal: '));
let dagen;

switch (maand) {
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        dagen = 31 
        break;
    case 'februari':
        if ((jaar % 4 == 0) && (jaar % 100 != 0) || (jaar % 400 == 0)) {
            dagen = 29
        } else {
            dagen = 28
        }
        break;
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        dagen = 30
        break;
    default:
        console.log('Ik ken deze maand niet.');
        process.exit();
}

console.log('De maand ' + maand + ' heeft in totaal ' + dagen + ' dagen in het jaar '+ jaar);

process.exit();