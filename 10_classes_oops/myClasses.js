// after ES6
// class User{
//     constructor(name,email,password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     encriptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.name.toUpperCase()}`
//     }
// }

// const chai = new User('chai', 'chai@username',123)

// console.log(chai.encriptPassword());
// console.log(chai.changeUsername());


//Behind the scene in JS

function User(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
}
User.prototype.encriptPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername = function(){
    return `${this.name}abc`;
}

const tea = new User('tea', 'tea@tea.com',234)
console.log(tea.encriptPassword());
console.log(tea.changeUsername());