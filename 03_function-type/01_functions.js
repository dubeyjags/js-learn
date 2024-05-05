// group of code to run multiple time by creating once

function sayMyName(){
    console.log("J");
    console.log("a");
    console.log("g");
    console.log("s");
}
// sayMyName(); // without parenthesis called refrence

function add(num1,num2){ //parameter passed in functions
    // console.log(num1 + num2); //without return its just run not save the value in function
}
add(3,5);//arguments passed in functions


function addMynumber(num1,num2){
    let result = num1 + num2;
    return result;//with return its save and return the value in function to store it
    // after return nothing with excute
}
const result = addMynumber(3,4) // after returning we can store the value
// console.log("result ",result);

function user(name="someone"){ // can set default value if arg pass then it will override
    return `${name} is the user`;
}
// console.log(user()); //if no args pass value will be undefined

function calculatePrice(...num){ // called rest operator
    return num
}  
console.log(calculatePrice(200,300,500));
