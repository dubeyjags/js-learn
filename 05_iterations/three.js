//for of
// ["","","",];
// [{},{},{},];

const arr = [1,2,3,4,5];
for (const i of arr) {
    // console.log(i);
}


const gret = "SiyaRam ki Jai";
for (const i of gret) {
    // console.log(i);
}

//Map :- kind of object with key value

const map = new Map();

map.set('in', 'India')
map.set('usa', 'United state of america')
map.set('fr', 'France')

// console.log(map);

for (const [k,v] of map) {
    console.log(k,v);
}