"use strict";

if (4 == 4) {
    console.log('Ok!')
} else {
    console.log('Error')
}

const num = 50;

if (num < 49) {
    console.log('Error')
} else if (num > 100) {
    console.log('Too much')
} else {
    console.log('Ok!')
}

(num === 50) ? console.log('Ok!') : console.log('Error');

const number = 51;

switch (number) {
    case 49:
        console.log("Nope");
        break;
    case 100:
        console.log("Nope");
        break;
    case 50:
        console.log("Yes");
        break;
    default:
        console.log("Not today");
        break;
}

