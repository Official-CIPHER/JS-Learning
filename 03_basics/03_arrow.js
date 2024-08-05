// this keyword - specify current context  

const user = {
    username :"vishal",
    price: 999,


    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();


//In browser - Global object - we have Window object  // that how we capture all event like clicking button , submitting form , etc....

// console.log(this); // {} empty object in node environment


// function chai(){
//     let username = "vishal"
//     console.log(this.username); // undefined //work only in object but not function 
// }

// chai()


// +++++++++++++ Arrow Function +++++++++++

// const chai = function() {
//     let username = "vishal"
//     console.log(this.username);
// } // still output is undefined


const chai = () => {
    let username = "vishal"
    console.log(this); // {} empty object as output
}

// chai() 

// arrow function syntax
// () => {}

// const addTwo = (num1 , num2 ) => {
//     return num1 + num2
// }


// another way - Implicit return 
// const addTwo = (num1 , num2) => num1 + num2
/* if its one line code then it Implicitly return the value
{ use return}
 (not required return) 
*/

// const addTwo = (num1 , num2) => ( num1 + num2 )

// Object in this syntax for example
const addTwo = (num1 , num2) => ({username:"vishal"})

/* object should be bind in () otherwise it'll give you undefined output */

console.log(addTwo(3,4));
