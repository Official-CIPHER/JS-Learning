class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

//static - use to not allow to access that method and properties

    static createId() {
        return `123`
    }
}

const vishal = new User("Vishal")

// console.log(vishal.createId());

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "i@phone.com")
iphone.logMe();

// console.log(iphone.createId());// not accessable to any parent and child class