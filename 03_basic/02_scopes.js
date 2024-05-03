// let a = 10; //these are the global scope
// const b = 20;
// var c = 30;

if(true){ // insdie this block scope  {} called scope
    let a = 10;
const b = 20;
var c = 30;
}
// console.log(a); only in scopes
// console.log(b); only in scope
// console.log(c); it has global scope

//Nested scope

function one(){  
    const name = "Jags";

    function two(){ //when child access the parent variable called closure 
        const website = "youtube"
        console.log(name);
    }

    // console.log(website);
    two();
}
one();

function addone(num){ // function type declartion
    return num + 1;
}
console.log(addone(5)); //Declaration function can be called any where (up or down)

const addTow = function(num){ // function type expression
    return num + 2;
}
console.log(addTow(5)); // expression function only called after the function creating