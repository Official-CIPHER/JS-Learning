// -----------Truthy and Falsy ------
// it is the assumed value that assumed to be true or false

// const userEmail = "v@vishal.ai" // assumed to be true
const userEmail = " "
// if empty "" then assumed to be false
// if empty [] then assumed to be true

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy values
// all value which is not Falsy is Truthy value
// true , 1 , [] , "0" ,'false' , " " , function(){}

// check empty array -

// if (userEmail.length === 0) {
//     console.log("Arrya is empty");
// }

// if object is empty then check -
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*
interview question
false == 0 // true
false == '' // true
0 == '' // true
*/


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // first value will assign which is 10

// use for database for null and undefined value or some value
// if value present then null is not display and value going to display

// console.log(val1);



// Terniary Operator
// Shorter syntax of if else

// condition ? true : false


const iceTeaPrice = 180 

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
