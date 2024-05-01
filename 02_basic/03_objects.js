// singleton create with constructors
// Object.create();

const mySym = Symbol('MyKey');

//Object Literals
const jsUser={
    name:"Jags", // name key treat as string with or without quotes
    "full name": "Jags Dubey",
    age:17,
    [mySym]:"myKey", // use square bracket for symbols keys
    location:"Noida",
    email:"dubeyji@iskool.com",
    lastLoginDays:["monday","tuesday"]
};

// console.log(jsUser.email); // values can access with . and [] both
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "dubeyji@chatgpt.com"
// Object.freeze(jsUser.email);
// console.log(jsUser);

jsUser.greetings= function(){
    console.log(`Hello ${this.name}`);
}
console.log(jsUser.greetings);
console.log(jsUser.greetings());