"use strict";

// let num = 20;
//
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
//
// showFirstMessage('Hello World!');
// console.log(num);
//
// function calc(a, b) {
//     return (a + b);
// }
//
// console.log(calc(4, 8));
// console.log(calc(45, 2));
// console.log(calc(3, 7));
//
// function ret() {
//     let num = 50;
//     return num;
// }
//
// const anotherNum = ret();
// console.log(anotherNum);
//
// const logger = function () {
//     console.log('hello');
// };
//
// logger();
//
// const calc2 = (a, b) => {
//     console.log('1');
//     return a + b;
// };

/*
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

test();
*/

function doNothing() {};
console.log(doNothing() === undefined);