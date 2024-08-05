// while and do while loop

//--------while loop
// syntax-
// initialization
// while (condition) {
//     // do something
//     Increament++
// }

let index = 0 
while (index<=10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

// array 
let myArray = ["flash" , "batman" , "superman"]
 let arr = 0 

 while(arr < myArray.length) {
    // console.log(`Value  is ${myArray[arr]}`);
    arr = arr + 1 
}


// ----- do while loop --------
// syntax-
// initialization
// do {
//     // run atleast 1 time and further runs if condition is true
//    increament++
// } while (condition);

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);