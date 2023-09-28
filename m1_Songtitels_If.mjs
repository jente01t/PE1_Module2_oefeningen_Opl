import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artiest1 = 1;
let nummerArtiest1 = 'Een nummer van deze artiest is: "On & On"';
let artiest2 = 2;
let nummerArtiest2 = 'Een nummer van deze artiest is: "Drifting"';
let artiest3 = 3;
let nummerArtiest3 = 'Een nummer van deze artiest is: "Age Of Love"';
let artiest4 = 4;
let nummerArtiest4 = 'Een nummer van deze artiest is: "Pursuit of Happiness"';

console.log('Kies een artiest:');
console.log('1. Armin van Buuren');
console.log('2. Tiësto');
console.log('3. Charlotte de Witte');
console.log('4. Steve Aoki');

let keuze = parseFloat(await userInput.question('Geef je keuze in: '));

if (keuze == artiest1) {
    console.log('Je koos voor "Armin van Buuren".');
    console.log(nummerArtiest1);
} else if (keuze == artiest2) {
    console.log('Je koos voor "Tiësto".');
    console.log(nummerArtiest2);
} else if (keuze == artiest3) {
    console.log('Je koos voor "Charlotte de Witte".');
    console.log(nummerArtiest3);
} else if (keuze == artiest4) {
    console.log('Je koos voor "Steve Aoki".');
    console.log(nummerArtiest4);
} else {
    console.log('Je koos voor "' + keuze + '" maar dit is geen keuze.');
}

process.exit();