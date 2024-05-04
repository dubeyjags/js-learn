const myArr = ['js','ruby','java','css'];

myArr.forEach(function(item){
    //console.log(item);
})

myArr.forEach( (item) => {
   // console.log(item);
})

myArr.forEach((i,index, arr)=>{// foreach values
   // console.log(i,index, arr);
})

const mycoding = [
    {name:'js',file:'js'},
    {name:'java',file:'java'},
    {name:'python',file:'py'}
]

mycoding.forEach((item)=>{
    console.log(item.name);
})