import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:url';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Wat is je eerste getal?'));
let getal2 = parseFloat(await userInput.question('Wat is je tweede getal?'));
let getal3 = parseFloat(await userInput.question('Wat is je derde getal?'));
let getal4 = parseFloat(await userInput.question('Wat is je vierde getal?'));
let getal5 = parseFloat(await userInput.question('Wat is je vijfde getal?'));

let grootsteGetal = getal1;
let kleinstegetal = getal1;
let gemiddelde = 0;

if (getal2 > grootsteGetal) {
    grootsteGetal = getal2;
} if (getal3 > grootsteGetal) {
    grootsteGetal = getal3;
} if (getal4 > grootsteGetal) {
    grootsteGetal = getal4;
} if (getal5 > grootsteGetal) {
    grootsteGetal = getal5;
}

if (getal2 < kleinstegetal){
    kleinstegetal = getal2;
} if (getal3 < kleinstegetal) {
    kleinstegetal = getal3;
} if (getal4 < kleinstegetal) {
    kleinstegetal = getal4;
} if (getal5 < kleinstegetal) {
    kleinstegetal = getal5;
}

gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5;


console.log('Het grootste getal is: ' + grootsteGetal);
console.log('Het kleinste getal is: ' + kleinstegetal);
console.log('Het gemiddelde is: ' + gemiddelde);

process.exit();