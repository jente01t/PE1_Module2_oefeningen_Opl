import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand: ');
let dagen = 0;

switch (maand) {
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        dagen = 31 
        console.log('De maand heeft in totaal ' + dagen + ' dagen.');
        break;
    case 'februari':
        dagen = 28
        console.log('De maand heeft in totaal ' + dagen + ' dagen.');
        break;
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        dagen = 30
        console.log('De maand heeft in totaal ' + dagen + ' dagen.')
        break;
    default:
        console.log('Ik ken deze maand niet.')
}

process.exit();