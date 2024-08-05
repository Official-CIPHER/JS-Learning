let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number (score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN - Not A Number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
//" "=> false
//"vishal" =>true

let someNumber = 38

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operation **********************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); // adition
// console.log(2-2); // subtraction
// console.log(2*2);  // multiplication
// console.log(2**3);  // power
// console.log(2/3);  // divide
// console.log(2%3);  // module use to give remainder

//-----------concatination ---------
let str1 = "hello"
let str2 = " vishal"

let str3 = str1 + str2 
// console.log(str3);

// console.log("1" + 2); // 12 - if string 1st then it auto convert 
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32 - if string at the end then first calculation and then conversion

// console.log(+true); // 1
// console.log(true+); // not allowed

// console.log(+""); // 0

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
// ++gameCounter; // prefix operator // 101
// gameCounter++; //postfix operator // 101
// console.log(gameCounter);

// Postfix and Prefix operator example
let x = 4;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:4"
// real output : "x:5, y:4"

let a = 4;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// real output: "a:5, b:5"
