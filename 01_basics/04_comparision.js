// console.log(2 > 1); // greater than
// console.log(2 >= 1); // greater and equal than
// console.log(2 < 1);  // smaller than
// console.log(2 <= 1); // smaller adn equal than
// console.log(2 == 1); // equal to
// console.log(2 != 1); // not equal to 

// console.log("2" > 1);
// console.log("02" > 1); //---> Prefer to compare same data type value 

// console.log(null > 0); // false
// console.log(null == 0);  // false
// console.log(null >= 0);  // true


// ****************** Reason ******************
/* 
The reason is that an equality check == and comparision > ,< ,>= ,<= 
work differently
Comparisions convert null to a number , treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/

// console.log(undefined == 0); // false
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false


console.log("2" === 2); // strict checking by === which check dataType too  // false