// ------------- variables --------------

const accountId = 144553 // ES6 version update
let accountEmail = "vishal@google.com" // ES6 version update
var password = "12345" // ES5 version part
accountCity = "Bihar" // not a good way of declaring variable 
let accountState;//undefined - whose value is not define yet

// accountId = 211103  //const value can not changed

accountEmail = "vishal@vk.com"
password = "211103"
accountCity = "Chennai"

// console.log(accountId);

//Fn+-> move end of the line

// console.table([]) is use to print something in table form

/* 
Prefer not to use var 
because of issues in block scope and functional scope // This is multiline comment which can't 
read by compiler
*/

console.table([accountId,accountEmail,password,accountCity, accountState]);
