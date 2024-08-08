class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

//extends - use to access the properties of another class

class Teacher extends User {
    constructor(username,email,password){
        
        super(username) // super method perform call method it automatically call the user class and apply this for reference.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const name = new Teacher("Vishal" , "Vishal@123gmail.com" ,"211103")

// name.addCourse()
// name.logMe()

const newName = new User("Harsh") 

// newName.addCourse()// not accessable by parent class
newName.logMe()

// console.log(name === newName); // false
console.log(name instanceof Teacher); // true

// instanceof - which means name is instance of Teacher or not , like name is made from Teacher


console.log(name instanceof User); // true
