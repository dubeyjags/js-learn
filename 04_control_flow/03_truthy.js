// empty string is false
// string value is true
// empty arr is true

const email = ""; // for array need to check length

if (email) {
    console.log('got it');
} else{
    console.log("not found");
}

//For array
const arr = [];

if(arr.length==0){
    console.log('array is empty');
}

//for object

const obj = {};

if(Object.keys(obj).length ==0){
    console.log('empty object');
}

// nullish coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = 11 ?? null;
// val1 = undefined ?? 10;
val1 = undefined ?? 10 ?? 20;
console.log(val1);


//Terninary operator

// contion ? true : false;

const icetea = 10;
icetea <= 20 ? console.log("less 20") : console.log("greator 20");


//false value
// false,0,-0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// true,"0","false","string", 1, [],{}, function(){}

