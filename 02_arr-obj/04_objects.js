//Singleton objects

const newUser = new Object() // Singleton Object
const newUser1 = {} // Object Litrals

newUser.id="123";
newUser.name="Ram";
newUser.isLoggedIn=false;

// console.log(newUser);

const regularUser = {
    name:"Ram",
    fullname:{
        userFullName:{
            first:"Siya",
            last:"Ram"
        }
    }
}
// console.log(regularUser.fullname?.userFullName.last); // user question mark for madatory key

 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"x",4:"y"}
//  const obj3 = {obj1,obj2}
//  const obj3 = Object.assign(obj1,obj2);
//  const obj4 = Object.assign({},obj1,obj2); // use first blank to create new black object otherwise all seconds object push inside the first object
//  console.log(obj3);
//  console.log(obj4);
//  console.log('obj1',obj1);
//  console.log('obj2',obj2);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// console.log(obj1.hasOwnProperty(1));

const course = {
    name:"js",
    price:999,
    instrutor:"Histesh"
}
const {instrutor: ins} = course; //change name with alias
// console.log(instrutor);
console.log(ins);


//Json is kind of Object with name but it has key as strings
