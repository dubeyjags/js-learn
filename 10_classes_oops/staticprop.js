class User{
    constructor(name){
        this.name = name
    }
    logMe(){
        console.log(`user name is ${this.name}`);
    }
    static createID(){
        return '112'
    }
}

const jags = new User('jags')

jags.logMe();
// console.log(jags.createID());


class Teacher extends User{
    constructor(name,email){
        super(name)
        this.email= email
    }

}

const phone = new Teacher('phone','phone@phone.com')

phone.logMe();
// console.log(phone.createID());