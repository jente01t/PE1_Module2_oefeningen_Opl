import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


console.log('Kies een artiest:');
console.log('1. Armin van Buuren');
console.log('2. Tiësto');
console.log('3. Charlotte de Witte');
console.log('4. Steve Aoki');

let keuze = parseFloat(await userInput.question('Geef je keuze in: '));
let artiest, nummer;

switch (keuze){
    case 1:
        artiest = 'Armin van Buuren';
        nummer = 'On & On';
        break;
    case 2:
        artiest = 'Tiësto';
        nummer = 'Drifting';
        break;
    case 3: 
        artiest = 'Charlotte de Witte';
        nummer = 'Age Of Love';
        break;
    case 4:
        artiest = 'Steve Aoki';
        nummer = 'Pursuit of Happiness';
        break;
    default: 
        console.log('Je koos voor ' + keuze + ' maar dit is geen geldige keuze.');
        process.exit();
}

console.log('je koos voor ' + artiest + '.');
console.log('Een nummer van deze artiest is: ' + nummer + '.');


process.exit();



/*
let nummerArtiest1 = 'Een nummer van deze artiest is: "On & On"';
let nummerArtiest2 = 'Een nummer van deze artiest is: "Drifting"';
let nummerArtiest3 = 'Een nummer van deze artiest is: "Age Of Love"';
let nummerArtiest4 = 'Een nummer van deze artiest is: "Pursuit of Happiness"';

console.log('Kies een artiest:');
console.log('1. Armin van Buuren');
console.log('2. Tiësto');
console.log('3. Charlotte de Witte');
console.log('4. Steve Aoki');

let keuze = parseFloat(await userInput.question('Geef je keuze in: '));

switch (keuze){
    case 1:
        console.log('Je koos voor "Armin van Buuren".');
        console.log(nummerArtiest1);
        break;
    case 2:
        console.log('Je koos voor "Tiësto".');
        console.log(nummerArtiest2);
        break;
    case 3:
        console.log('Je koos voor "Charlotte de Witte".');
        console.log(nummerArtiest3);
        break;
    case 4:
        console.log('Je koos voor "Steve Aoki".');
        console.log(nummerArtiest4);
        break;
    default: 
    console.log('Je koos voor "' + keuze + '" maar dit is geen keuze.');
}*/