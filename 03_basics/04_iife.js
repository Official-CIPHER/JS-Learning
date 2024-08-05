// Immediately Invoked Function Expression (IIFE)

// reason :-
// 1. Don't want any pollution form global scope
// 2. Immediately execution


// ------it work but we don't want pollution form global scopes
// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()


(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
})();

/* to prevent error in further code use semicolon (;) to end the IIFE condition // usually it auto apply by editor but if not then apply by yourself
*/
// syntax
// (defination)(execution) such as chai()

// Unnamed IIFE
( () => {

    console.log(`DB CONNECTED TWO`);
} )();

//parameter IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('vishal');

// Write two IIFE - use semicolon after one IIFE 