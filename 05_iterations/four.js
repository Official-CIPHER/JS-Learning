// for in loop
// loop on object

const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

// for key 
// for (const key in myObj) {
//     console.log(key);
// }


// for object value
// myObj[key]

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


// for in loop on array
const programming = ["js","rb","py","cpp"]

for (const key in programming) {
//    console.log(programming[key]);
}
// array hold key but started from 0 and in object the key is define by the user
// so for printing array value use console.log(programming[key]);

// -----Maps----
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IN' , "India")

for (const key in map) {
    // console.log(key);
}// not iteratable by using for in loop