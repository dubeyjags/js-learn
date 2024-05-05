const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,cv){
//     console.log(`acc is ${acc} and cv is ${cv}`);
//     return acc + cv;
// },0);

const myTotal = myNums.reduce((acc,cv) => acc+cv,0)
console.log(myTotal);

const cart =[
    {
        item:"Js",
        price:2999
    },
    {
        item:"Python",
        price:999
    },
    {
        item:"Mbile developement",
        price:5999
    },
    {
        item:"DSA",
        price:11999
    },
]
const mycourse = cart.reduce((acc,item) => acc + item.price, 0);
console.log(mycourse);