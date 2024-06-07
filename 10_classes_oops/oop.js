const user = {
    name:"jags",
    age:33,
    signedIn:true,
    greeting:function(){
        console.log(`hello ${this.name}`);
    }
}
console.log(user.greeting());

function User(name,age,signedIn){
    this.name = name,
    this.age = age,
    this.signedIn = signedIn,
    this.greeting = function(){
        console.log(`hi ${this.name}`);
    }
}

const userOne = new User('Hitesh',34,false); 
const userTwo = new User('Uzio',1,true);

console.log(userOne);
console.log(userTwo);

// new word is the constructor to create new instance
// abstraction is the code shorting to do the work like gretings
// Encapsulation is main user which has all the value 