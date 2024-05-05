// Array collections of all type of data. it can increase decrease and modified, 
// Array always be as on indexing
//changes will be on the main var only deep copy can be saved and unchangeable
// array has property and prototype also prototype inside the prototype

const myArr = [1,2,3,4,5];
const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr[1]);
// myArr.push(6); add value in last
// myArr.pop(); remove last value

// myArr.shift(9); //add value in start
// myArr.unshift(9);
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


//slice and splice

console.log("original", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("original after slice", myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("original after splice", myArr);
