function multiplyBy5(num){
    return num*5
}

// prototypal inheritance - as depth as it find what it searching for
//Object is the last stage of prototype which is like end of the prototype and prototype of object is null (assumed)

// prototype has also includes some additional properties including this

multiplyBy5.power = 2

// function is function as well as object

// console.log(multiplyBy5(5)); // 25
// console.log(multiplyBy5.power); // 2
// console.log(multiplyBy5.prototype); // {}

function createUser(username,score){
    this.username = username
    this.score = score
}

// Own function injection in prototype(creation in prototype)
createUser.prototype.increament = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

// this - jiska ne bhi bulaya

const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.increament()
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/