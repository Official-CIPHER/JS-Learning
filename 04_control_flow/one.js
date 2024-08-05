// ---------------------control flow--------------------------
// Always run code in conditional way

// = meaning assign the value

// -------if 

const isUserLoggedIn = true

if (isUserLoggedIn) {
    // (condition that evalutes true)
 // if condition true then only this line will execute
}
if (false) {
// if condition is false then this line will not going to execute
}

// comparision operator
// < , > , <= , >= , == , != , ===(use for strick checking which check datatype too) , !==

/* condition for explaination the concept
-> isUserLoggedIn 
-> 2 != 3 // true // executed
*/

// -------if else 
//if condition true then if statement executed otherwise else statement executed

/*
const temperature = 51

if ( temperature < 50  ) {
    console.log("less than 50");
}
else {
console.log("temperature is greater than 50")
}

console.log("Execute");
*/
/*
const score =  200 

if (score > 100) {
    const power = "fly"
    console.log(`User power : ${power}`);
}
console.log(`User power : ${power}`); // output - power  is not define // due to scope of curly braces , if we put var instead of const  in power then it will give you output.
*/



// ------Shorthand notation

// const balance = 1000 

// NOT A GOOD Practice  

// if ( balance > 500 ) console.log("test"),console.log("test2");

// it only execute single line not multiline , if you want to add multiple line then add comma (,) and at the end put semicolon (;) for termination


// IF ELSE IF (Multiple conditions)

/*
const balance = 1000 

if (balance < 500) {
    console.log("less than 500");
} else if ( balance < 750) {
    console.log("less than 750");
} else if ( balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
*/


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}


/* 
-- logical operator --
&& - AND condition in which all conditions must be true
|| - OR condition in which any one all conditions is true then whole whole condition is true and block statement execute
*/