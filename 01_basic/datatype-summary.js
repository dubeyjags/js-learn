// // Datatypes
// // Primitive (call by value)
// // 1) String
// console.log("string", "Name");
// console.log("typeof", typeof("Name"));
// // 2) Number
// console.log("number", 123);
// console.log("typeof", typeof(123));
// // 3) Boolean
// console.log("boolean", true);
// console.log("typeof", typeof(true));
// // 4) null (Empty)
// console.log("null", null);
// console.log("typeof", typeof(null));
// // 5) undefined (value not defiened)
// let unde;
// console.log('undefined', unde);
// console.log('typeof', typeof(unde));
// // 6) Symbol (creating unique)
//let sym = Symbol(123);
// console.log('Symbol', sym);
// console.log('typeof', typeof(sym));
// // 7) BigInt (long Number value)
// console.log('BigInt', 233453434324324324324324324324242n);
// console.log('typeof', typeof(233453434324324324324324324324242n));


// // Non Primitive (call by reference)
// // 1) Array
// console.log('array', ["string",2,true]);
// console.log("typeof", typeof(["string",2,true]));
// // 2) Object
// console.log('object', {a:1,b:2,c:3});
// console.log("typeof", typeof({a:1,b:2,c:3}));
// // 3) Function
// let func = function(){
//     console.log("my function");
// }
// console.log("function", func);
// console.log("typeof", typeof(func));