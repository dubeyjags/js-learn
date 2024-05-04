// for


for (let index = 0; index < 10; index++) { // new block scope
    const element = index;
    if(element == 5){
        // console.log("5 is the best");
    }
    // console.log(element);    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Outer loop ${i} Inner loop ${j}`);
        // console.log(i + 'X' + j + '=' + i*j); // math table 
    }
}
const myArr = ["Ram","lakshman","Hanuman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);    
}

// break and continue
// for (let index = 0; index < 20; index++) {
//     if(index == 5){
//         console.log('deducted 5');
//         break; // stop the loop
//     }
//     console.log(`value of index is ${index}`);
// }
for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log('deducted 5');
        continue; // skip the value for condition
    }
    console.log(`value of index is ${index}`);
}
