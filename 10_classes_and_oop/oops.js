const user = {
    username: "Vishal",
    logincount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username); // Vishal
// console.log(user.getUserDetails());
// console.log(this); // {}


//-------------new keyword----------

// const promiseOne = new Promise()
// const date = new Date() 
// new keyword - constructor function - allow you create multiple instance from single object litral
// use to make new context 

function User(username,loginCount,isloggedIn){
    this.username = username;
    //variable = pass value
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //already implicitely define but add this 
}

const userOne = new User("Vishal", 12 ,true)
const userTwo = new User("ChaiAurCode" ,11 , false)
console.log(userOne.constructor);
console.log(userTwo);


