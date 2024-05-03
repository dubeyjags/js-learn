//IIFE = immediately invoked function expression 
// for excute function immedeately for saving from the pollution of the global scoping

(function myFunc(){ // Also called named IIFE
    console.log("DB connected");
})(); // wrap the function in parenthisis() the another parenthisis() for execution thats IIFE
//also use semicolon; to end the iife

//iife with arrow function (unnamed iife) and also can pass parameters 
((name) => {
    console.log(`DB 2 Connected ${name}`);
})('Jags');

//also use semicolon at the end to use multiple iffe