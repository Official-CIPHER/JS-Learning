// These are some array specific loop

// for of 
/*
for (const iterator of object) {
    // do something
    // iterator - variable
    // object - on which you want to apply loop, it can be string , array , object , anything
}
*/

// ["", "", ""]
// [{}, {} , {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
//   console.log(num);  
}

const greetings = "Hello world!" 
for (const greet of greetings) {
    // if(greet == " ") {
    //     continue;
    //     break;
    // };
    // console.log(`Each char is ${greet}`);
}


// -------Maps ---------
// the map object holds key value pair and remembers the original insertion order of the keys.
// it give you unique value rather than duplicate value


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IN' , "India")// not allow duplicate value and order as same as you write
// console.log(map);

// loop on Maps
for (const key of map) {
    // console.log(key);
} // it give you output as form of array and in same order as you mentioned below

// output
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]


// for string values 
for (const [key, value] of map) {
    // console.log(key,":-", value);
}

// output:-
// IN :- India
// USA :- United State of America
// Fr :- France


// ------- object ------

const myObj = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

for (const [key,value] of myObj) {
    // console.log(key, ":-" , value);
}

// for of loop is Not working for objects iterator