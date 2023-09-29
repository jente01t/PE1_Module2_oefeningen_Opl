import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

console.log('');
console.log('');
console.log('');

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen: ');
let juist = 0;

console.log('Vraag 1: Wat is de hoofdstad van Frankrijk?');
let Vraag1 = await userInput.question('Jouw antwoord: ');
let antwoordVraag1 = 'Parijs';
if (Vraag1 == antwoordVraag1) {
    console.log('Goed Antwoord!');
    juist ++;
}else {
    console.log('Fout antwoord, het juiste antwoord is: ' + antwoordVraag1);
}

console.log('');

console.log('Hoeveel planeten zijn er in ons zonnestelsel?');
let Vraag2 = parseFloat(await userInput.question('Jouw antwoord: '));
let antwoordVraag2 = 8;
if (Vraag2 == antwoordVraag2) {
    console.log('Goed Antwoord!');
    juist ++;
} else {
    console.log('Fout antwoord, het juiste antwoord is: ' + antwoordVraag2);
}

console.log('');

console.log('Wat is het grootste zoogdier ter wereld?');
let Vraag3 = await userInput.question('Jouw antwoord: ');
let antwoordVraag3 = 'Blauwe vinvis';
if (Vraag3 == antwoordVraag3) {
    console.log('Goed antwoord!');
    juist ++;
} else {
    console.log('Fout antwoord, het juiste antwoord is: ' + antwoordVraag3);
}

console.log('');

console.log('Wie schreef het toneelstuk \'Romeo en Julia\'?');
let Vraag4 = await userInput.question('Jouw antwoord: ');
let antwoordVraag4 = 'Shakespeare';
if (Vraag4 == antwoordVraag4) {
    console.log('Goed antwoord!');
    juist ++;
} else {
    console.log('Fout antwoord, het juiste antwoord is: ' + antwoordVraag4);
}

console.log('');

console.log('Hoeveel poten heeft een spin?');
let Vraag5 = parseFloat(await userInput.question('Jouw antwoord: '));
let antwoordVraag5 = 8;
if (Vraag5 == antwoordVraag5) {
    console.log('Goed antwoord!');
    juist ++;
} else {
    console.log('Fout antwoord, het juiste antwoord is: ' + antwoordVraag5);
}

console.log('');
console.log('Je hebt ' + juist + ' van de 5 vragen juist beantwoord.');

console.log('');
console.log('');

process.exit();