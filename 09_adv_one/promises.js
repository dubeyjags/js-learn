const promiseOne  = new Promise(function(resolve, reject){
    // DB calls
    // async task
    // networks calls
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
});
promiseOne.then(function(){
    console.log('consume');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user:"jags",email:"jags@jags.com"});
    },1000)
});
promiseThree.then(function(user){
console.log(user);
});


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true;
        if(!err){
            resolve({user:'jags'})
        } else {
            reject('err: somthing worng')
        }
    },1000)
});

// promiseFour.then((user) => {
//     console.log(user);
//     return user.user
// }).then(function(user){
//     console.log(user);
// }).catch(function(err){
//     console.log(err);
// }).finally(function(){
//     console.log('finally done');
// })

promiseFour
.then((user) => {
    console.log(user);
    return user.user
}).then((user) => console.log(user))
.catch((err) => console.log(err))
.finally(() => console.log('finally done'));


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true;
        if(!err){
            resolve({user:'promise five'});
        } else {
            reject('kuch gadbad hai');
        }
    },1000)
});

async function consumePromiseFive(){
   try{
    const res = await promiseFive;
    console.log(res);
   } catch(err){
    console.log('errr');
   }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://api.github.com/users/dubeyjags');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/dubeyjags')
.then((res) => res.json())
.then((data) => console.log(data)) 
.catch((err) => console.log(err))