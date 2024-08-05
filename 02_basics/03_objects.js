// objects

// singleton : only one object 
// if make by constructor then always singleton

// Object.create// constructor method

// object literals

const mySym = Symbol("key1")
// [mySym] : "myKey1" ---- Symbol syntax for object representation
 const JsUser = {
    name:"Vishal",
    "full name" :"Vishal Kumar",
    [mySym]: "myKey1",
    age:20,
    location:"Bihar",
    email:"vishal@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }

// 1st way of accessing object
// console.log(JsUser.email); // -----special note
// mostly use . to access the properties

// 2nd way of accessing object
// console.log(JsUser["email"]);//--------special note
// In some case use [] for accessing the properties, it specially asked in interview

// console.log(JsUser["full name"] );
// console.log(JsUser[mySym] ); // string

// changing the data inside the object
JsUser["email"] = "vishal@chatgpt.com"
JsUser.email = "vishal@chatgpt.com"
// console.log(JsUser["email"]);

// freez the value -
// after that we cannot change the value of any key.

// Object.freeze(JsUser)
JsUser.email = "vishal@microsoft.com"
// console.log(JsUser);

// ------------adding function---------- 
// always add () if method

JsUser.greeting = function() {
    console.log("Hello Js User")
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User , ${this.name}`)
}
// this - use to reference the same object to access the properties 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());  