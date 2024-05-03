// use Temporal for dates like Math for future

let mydate = new Date();
// console.log(mydate);
// console.log('toString() - ',mydate.toString());
// console.log('toDateString() - ',mydate.toDateString());
// console.log('toJSON() - ',mydate.toJSON());
// console.log('toLocaleDateString() - ',mydate.toLocaleDateString());
// console.log('toLocaleString() - ',mydate.toLocaleString());

//console.log(typeof mydate);

// let mycreteddate = new Date(2023, 4, 5);// month will start with 0
// let mycreteddate = new Date("2020-10-13"); // this type month will start from 1
let mycreteddate = new Date("10-13-2020");  // chnages the format
// console.log(mycreteddate.toDateString()); 

let myTimeStamp = Date.now(); // get in milliseconds

// console.log(myTimeStamp);
// console.log(mycreteddate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log('newDate',newDate);
console.log('getMonth',newDate.getMonth() + 1);
console.log('getDay',newDate.getDay());
console.log('getHours',newDate.getHours());
console.log('getMinutes',newDate.getMinutes());
console.log('getSeconds',newDate.getSeconds());
console.log('getMilliseconds',newDate.getMilliseconds());
console.log('getUTCDate',newDate.getUTCDate());
console.log('getFullYear',newDate.getFullYear());
console.log('getUTCMonth',newDate.getUTCMonth());
console.log('getUTCHours',newDate.getUTCHours());
console.log('getUTCMinutes',newDate.getUTCMinutes());
console.log('getUTCSeconds',newDate.getUTCSeconds());
console.log('getUTCMilliseconds',newDate.getUTCMilliseconds());

newDate.toLocaleString('default', {
    weekday: 'long',
})
