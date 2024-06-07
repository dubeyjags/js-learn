const myName = "jags   "

// console.log(myName.trueLength); // need to get the exact length without space

String.prototype.trueLength = function(){
    console.log(`this is true length ${this.trim().length}`);
}

myName.trueLength();
"ho to gaya    ".trueLength();