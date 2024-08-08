// ES6 
// classes ------
// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}sdf1@#41hs`
//     }
//     toCapitalized(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const name = new User("Vishal", "vishal@123gmail.com" , "211103");
// console.log(name.encryptPassword());
// console.log(name.toCapitalized());


// ---------- Behind the scene ----------

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}bayh@231#2ws`
}
User.prototype.toCapitalized = function(){
    return `${this.username}`
}

const hello = new User("Hello" , "hello@gmail.com" , "H123")
console.log(hello.toCapitalized());
console.log(hello.encryptPassword());

