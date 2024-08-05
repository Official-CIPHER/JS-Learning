// -------------------- array ---------------------
// enables storing a collection of multiple items under a single variable name

const myArr = [ 0, 1, 2, 3, 4, 5 ]

/* description -
* resizable and can contain a mix of different data types
* not associative arrays - elements cannot be accessed using arbitrary strings as indexes
*  zero-indexed
* array-copy operations create shallow copies (Non-Primitive(reference type))
*/

// Another way of declaring array - using new keyword

const myArr2 = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr);
// console.log(myArr2);

// for accessing value 
// console.log(myArr2[2]); // index 2 = 3


// ---------------Array methods---------

// myArr.push(6) // add in last
// myArr.push(7)
// myArr.pop() // remove from last

//------- add & remove from starting-----

//myArr.unshift(8) // add in starting
// myArr.shift() // remove from starting

// console.log(myArr);


//------- questioner ---------

// answer in true and false
//console.log(myArr.includes(9)); // find the value in array 

// console.log(myArr2.indexOf(2)); // tell index position value

const  newArr = myArr.join() // use to bind and convert into string

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); // string and bind the data


//---------- slice and splice ----------

console.log("A " , myArr);

const myn1 = myArr.slice(1,3);
// slice give the array which includes starting index value to value before ending index
// slice doesn't manupulate the original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
// splice give the array which includes starting index value to ending index value 
//splice do manupulation with the original array

console.log("C ", myArr);
console.log(myn2);

