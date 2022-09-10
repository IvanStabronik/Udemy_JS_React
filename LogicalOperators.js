
// const hamburger = 5;
// const fries = 0;
//
// if (hamburger && fries) {
//     console.log('Im full');
// }

const hamburger = 0;
const fries = null;
const cola = 0;
const nuggets = 2;

// console.log(hamburger === 3 && cola  && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "fdasdfad");

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Im happy');
} else {
    console.log('We are leave');
}


console.log(hamburger || cola || fries);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log((johnReport || alexReport || samReport || mariaReport));