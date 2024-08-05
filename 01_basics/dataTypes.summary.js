// Primitive (call by value)
/* 
use the reference of copy of original data
all change will occur on copy values
*/

// 7 types : String, Number, Boolean, null, undefined, Symbol,Bigint

const score = 100 // Number
const scoreValue = 100.3
const name = "Vishal"; // String
const isLoggedIn = false // Boolean
const outSideTemp = null // null typesof - object
let userEmail; // undefined

const id = Symbol('123') //Symbol
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 34345678903456345678n // Bigint


// Non-Primitive (Reference Type) 
/*
directly allocate the reference value in  memory  
*/

// Types : Array, Object, Functions
// all are  typeof object  


const heros = ["shaktiman","naagraj","doga"]; // Array typeof - object
 
let myObj ={
    name:"vishal",
    age:20,
} // Object typeof - object

const myfunction = function(){
    console.log("vishal kumar");
} // function typeof - object function

// console.log(typeof myfunction);



/* ------JavaScript Dynamic Type Language-------
JavaScript is a Dynamic Type Language :- This means that the type of a variable is determined at runtime, based on the value it holds. You don't need to explicitly declare the type of a variable when you create it.
*/

// ex - let x = 5 // x is Number
// x = "hello"; // x is now a String



//************* Memory *****************

// Stack(Primitive) and Heap(Non-Primitive) Memory


// stack example

let websiteName = "googledotcom" // copy passes to the next variable for any changes and original value remain same

let anotherName = websiteName

anotherName = "githubdotcom"

console.log(websiteName); //googledotcom
console.log(anotherName); // githubdotcom

// heap example 
let userOne = {
    email:"userOne@google.com",
    upi:"user@ybl"
}

let userTwo = userOne; // it passes the reference of userOne and if we change anything in userTwo , the changes will reflect on userOne also

userTwo.email = "xyz@google.com"

console.log(userOne.email); //xyz@google.com
console.log(userTwo.email); //xyz@google.com