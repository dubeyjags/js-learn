function setUser(user){
    this.user = user;
}

function createUser(name,email,pass){
    setUser.call(this,name);
    this.email= email;
    this.pass= pass;
}
const chai =new createUser('chai','chai@chai.com',112233);
console.log(chai);