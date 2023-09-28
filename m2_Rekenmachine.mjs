import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Wat is je eerste getal?'));
let getal2 = parseFloat(await userInput.question('Wat is je tweede getal?'));

let som = 0;
let aftrekken = 0 ;
let vermenigvuldigen = 0;
let delen = 0;



console.log('Kies een bwerking:');
console.log('1. optellen');
console.log('2. aftrekken');
console.log('3. vermenigvuldigen');
console.log('4. delen');

let keuze = parseFloat(await userInput.question('Geef je keuze in: '));

switch (keuze){
    case 1:
        som = getal1 + getal2
        console.log('Je koos voor "optellen".');
        console.log(getal1 + ' + ' + getal2 + ' = ' + som);
        break;
    case 2:
        aftrekken = getal1 - getal2
        console.log('Je koos voor "aftrekken".');
        console.log(getal1 + ' - ' + getal2 + ' = ' + aftrekken);
        break;
    case 3:
        vermenigvuldigen = getal1 * getal2 
        console.log('Je koos voor "vermenigvuldigen".');
        console.log(getal1 + ' * ' + getal2 + ' = ' + vermenigvuldigen);
        break;
    case 4:
        delen = getal1 / getal2
        console.log('Je koos voor "delen".');
        console.log(getal1 + ' / ' + getal2 + ' = ' + delen);
        break;
    default: 
    console.log('Je koos voor "' + keuze + '" maar dit is geen keuze.');
}

process.exit();