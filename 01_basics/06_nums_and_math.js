const score = 400;
// console.log(score);

// another way of defining the number - using new keyword

const balance = new Number(100)
// console.log(balance); // specifically define number

// some properties and methods of number

// ******** toString()*********
// console.log(balance.toString().length);// use to convert number into string.


// ******** toFixed(decimal no.)********
// console.log(balance.toFixed(2));//100.00 // use for fixing the decimal values


// ******* toPrecision(number) ********
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));// 124 // precisely define the value // other remaining number are automatically rounded of

// ********** toLocaleString(country)*******
const hundreds = 1000000
//console.log(hundreds.toLocaleString("en-IN"));// 10,00,000 // use for apply comma to make easy counting

/* some values are :- ar-EG (١٬٠٠٠٬٠٠٠)  
   zh-Hans-CN-u-nu-hanidec (一,〇〇〇,〇〇〇)
*/

/*
Number.MAX_VALUE // max. value of number // static data property represents the maximum numeric value representable in JavaScript
Number.MIN_VALUE // min. value of number  // static data property represents the smallest positive numeric value representable in JavaScript.
Number.MAX_SAFE_INTEGER // it is the max.safe value that number can store
Number.MIN_SAFE_INTEGER // it is the min. safe value that number can store
*/


// ++++++++++++++++++++++++ MATHS ++++++++++++++++++++++

// console.log(Math); // Object [Math] {}

// some values of MATHS

/*
console.log(Math.abs(-4)); // use for absolute value , its not convert +4 into -4 
console.log(Math.round(4.3)); // mix of ceil and floor
console.log(Math.ceil(4.2)); // 5 choose upper value to round
console.log(Math.floor(4.9)); // 4 choose lower value to round

console.log(Math.max(4,2,5,7,1)); // use to find max value in series of number
console.log(Math.min(4,2,5,7,1)); // use to find min value in series of number
*/


// ************** Math.random() *********

// console.log(Math.random()); // generate random value btw 0 and 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1); // use for getting value without decimal 


// value btw 2 number formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min)

// adding 1 is to avoid 0 value 