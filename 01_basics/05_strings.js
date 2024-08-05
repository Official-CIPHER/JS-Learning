const name = "Vishal"
const repoCount = 50

// console.log(name + repoCount + " value");

// Backtick  ` `
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount} value`)

// another way of declaring the string - using new keyword

const gameName = new String('vishal-vk-com')

// console.log(gameName);

//********* key-value pair access and proto method *******************

// console.log(gameName[0]);// access of key value pair
// console.log(gameName.__proto__);


// ******* length **********
// console.log(gameName.length); // give the length of variable

// ******* toUpperCase() *********
// console.log(gameName.toUpperCase()); // capitalize the letter

//******** charAt(indexNumber)********
// console.log(gameName.charAt(2)); // find the position of character 

// ******** indexOf('character') ********
// console.log(gameName.indexOf('s')); // find the character index position


// ******** substring(start,end)*********
const newString = gameName.substring(0, 4); // ignore -ve value // gives a part of string // including starting value  to before ending value
// console.log(newString); 


// ********** slice(start,end)********
const anotherString = gameName.slice(-7, 5); // allowed to use -value for revesing the string // including starting value  to before ending value
// in reverse order start from -1.

// console.log(anotherString);

// *********** trim() **********
const newStringOne = "    vishal       "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove unwanted extra white spaces
// trimStart() // remove starting white spaces
// trimEnd() // remove ending white spaces

// ********* replace() ************
const url = "https://google.com/google%20event"
// console.log(url.replace('%20', '-'));// use to replace something

// *********** includes() **********
console.log(url.includes('sundar'));// to find something in your given variable 


// *************** split () ************
console.log(gameName.split('-')); // according to separator and limit