// var c = 300 // it is global varibale which can be access anywhere in the code
let a = 400 // it is globally scope
// scope
if (true) {
    let a = 10
    const b = 20  
    // console.log("INNER", a); 
}

// scope type 
// global scope - Outside the {} and available for all over the code
// block scope - Inside { \\ all code are block scope} and it is not available for outer world


// console.log(a); 
// console.log(b);
// console.log(c); // value override 



//In browser - the scope is different 
// In codeEditor - the scope is different if you checking through node


// **************** nested function **********

/* child function access parent variable but parent does not access the child variable  */
function one(){
    const username = "vishal"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); // this line give error - not defined

    // two() // if we don't execute this two() function then this code will give you nothing as output
    //for that two() never executed
}

// one()

// ***** if else example ********

if (true) {
    const username = "kumar "

    if (username === "kumar ") {
        const website = "youtube"
        // console.log(username + website);
    }

    // console.log(website); // child variable not accessed by parent and outside scope 
}

// console.log(username); // Outside the block will not access


// ++++++++++++++++++++ interseting ++++++++++

// hoisting 
/*
This means you can use a variable or function before it's declared in your code.
 */


console.log(addOne(5))// it run without any error

function addOne(num) {
    return num + 1;
}

// addOne(5)

// addTwo(5); // Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2;
}

// addTwo(5)