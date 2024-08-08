function setUserName(username){
    // complex DB Calls 
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
 
    setUserName.call(this,username)

    this.email = email
    this.password = password
}

const name = new createUser("Vishal","Vishal@124gmail.com", "211103")

console.log(name);

// call() -
// The call() method of Function instances calls this function with a given this value and arguments provided individually.
