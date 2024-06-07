function multiplyBy5(num){
    return num * 5
}
multiplyBy5.power=2; //shows that function is also an object
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(name,score){
    this.name = name; // this means jis ne bulaya
    this.score= score;
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.print = function(){
    console.log(`this is ${this.score}`);
}

const chai = new createUser("chai",10)
const tea = new createUser("tea",50)

tea.print();

/*
Here the info behind the new keyword creation
-A new keyword created: it initiate the creation of new object in JS
-prototype is linked: newly create object get linked to prototype property of the constructor function
    it acess the property and methods defined on the constructor prototype (like print and increment)
-the constructor is called - like this.user and this.score
-new object returned
*/ 