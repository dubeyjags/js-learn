const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);
//console.log(balance.toString().length); //convert to string and get the length
//console.log(balance.toFixed(2)); // get the decimal with 2 places

const myNumber = 145.9845;
// console.log(myNumber.toPrecision(3)); // get the round off max 3 places then get exponentials

const hunderds = 10000000;
// console.log(hunderds.toLocaleString('en-IN')); // get the comma also with indian style

//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // the negative value in postive 
// console.log(Math.round(4.565)); // get the round
// console.log(Math.ceil(4.565)); // get the top
// console.log(Math.floor(4.565)); // get the bottom
//console.log(Math.sqrt(4)); // get the root square
// console.log(Math.min(4,5,7,2,8,9)); // get the min
// console.log(Math.max(4,5,7,2,8,9)); // get the max
// console.log(Math.random()); // get the random
// console.log(Math.random()*10); // get the random
//console.log((Math.random()*10) + 1); // get the random
//console.log(Math.floor(Math.random()*10) + 1); // get the random

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);// number between min and max