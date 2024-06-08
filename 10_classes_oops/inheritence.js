class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log(`name is ${this.name}`);
    }
}

class Teacher extends User{
    constructor(user,email,password){
        super(user)
        this.email  = email;
        this.password  = password;
    }
    addCourse(){
        console.log(`new course by ${this.username}`);
    }
}

const jags = new Teacher('jags','jags@teacher.com',123)

jags.logMe();
jags.addCourse();

const newUser = new User('newuser')

newUser.logMe();