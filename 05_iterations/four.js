const myObj ={
    js:"Javascript",
    cp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}
for (const key in myObj) {
   // console.log(`${key} is for ${myObj[key]}`);
}

const myArr = ['js','ruby','java','css'];
for (const key in myArr) { // also can use for of loo
   // console.log(`${key} is for arr ${myArr[key]}`);
}

for (const key of myArr) {
    //console.log(`${key} is for of arr ${myArr[key]}`);
}

const map = new Map();
map.set('in', 'India')
map.set('usa', 'United state of america')
map.set('fr', 'France')

// for (const key in map) { // nor work in for in loop
//     console.log(key);
// }