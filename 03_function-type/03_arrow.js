const user = {
    name:"Jags",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMsg();
// user.name="Ram"; // changed  the context
// user.welcomeMsg();

// console.log(this); // in the broweser we see window in node its blank object

// function siya(){
//     let user = "Ram"
//     // console.log(this.user); // this will only work in object
// }
// siya()

//Arrow Functions

// const myFunction = function(){
//     let user ="jags"
//     console.log(this.user); //undefined
// }

// const myFunction = () => {
//     let user ="jags"
//     console.log(this.user); // undefined this will also not work in arrow function
// }
// myFunction();


//Basic Arrow if you use {} then should use return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implesit return id you done use {} then no need to use return
// const addTwo = (num1, num2) =>  num1 + num2;
const addTwo = (num1, num2) =>  ({user:"Jags"}); // use parentheis for return the object

console.log(addTwo(2,3));