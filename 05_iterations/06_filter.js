// const myArr = ['js','ruby','java','css'];

// const value = myArr.forEach((i)=>{
//     // console.log(i);
//     return i
// });
// console.log(value);

const myNum = [1,2,3,4,5,6,7,8,9];
// const newNums = myNum.filter((num) =>  num > 5);// for {} need to use return other value doesnt saved
// console.log(newNums);
// const newNums2 = myNum.filter((num) => {return num > 5}); // for {} need to use return other value doesnt saved
// console.log(newNums2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const historyBooks = books.filter((bk) => bk.genre == 'History');
//   console.log(historyBooks);
  const publish2000= books.filter((bk) => {return bk.publish >= 1995 && bk.genre=='History'})
  console.log(publish2000);