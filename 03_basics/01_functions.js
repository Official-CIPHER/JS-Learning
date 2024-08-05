// function structure
function sayMyName() {
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

// sayMyName // only a reference of function

// sayMyName();// call the function

function addTwoNumber(num1 , num2) {
    //  console.log(num1 + num2);
}

// function functionName(parameter1,parameter2)

// function(argument1 , argument2) at function call
// addTwoNumber(3,4) 

// const result1 = addTwoNumber(3,5)

/* 
console.log("Result",result);//console only log the value not return the value . output - undefined
*/

function addtwoNumber(numb1,numb2) {
    
    let result = numb1 + numb2
    return result
    //no more code will execute after return
}
/* 
By default function return is the last value and it not allow to execute further any line 
*/

const result2 = addtwoNumber(3,6)

// console.log("Result" , result2);

function AddtwoNumber(number1,number2) {
    return number1 + number2;
}

const result3 = AddtwoNumber(2,2)

// console.log(result3);

//-----if user not enter the name then the if statement runs
function loginUserMessage(username = "Heena"){
    // if(username === undefined ){
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vishal"))

/* return gives the value but not print the value ,whereas console.log is use to print the value */

// console.log(loginUserMessage()); // if value is not given then its undefined

// console.log(loginUserMessage("Vishal"));
// if(!username) same as upper if condition

/* function functionName(parameter1="default") for default value and it will never goes under the false condition and never show undefined value */


// ******************* cart (function part 2)***********

function calculateCartPrice(val1, val2,...num1) {
    return num1
}
// ...num1 is rest operator and use to pack in bundle of raw values and it give you array value
// you can use it as parameter or as return value 
// ... it is also know as spread operator and also rest operator , for use it depends on situations weather as concat or bundle.

// val1 = 200 , val2 = 400 and rest value in num


// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username:"vishal",
    price:199
}
// type checking is aslo important for the code existences
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
 
/* another way of defining object in function */
 handleObject({
    username:"sam",
    price:399
 })


 // passing arrays in function
 const myNewArray = [200, 400, 100 , 600]

 function returnSecondValue(getArray){
    return getArray[2]
 }

//  console.log(returnSecondValue(myNewArray));

/* another way of defining array in function */
 console.log(returnSecondValue([200, 300 , 500, 400]));