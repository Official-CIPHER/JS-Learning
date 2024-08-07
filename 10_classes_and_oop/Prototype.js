// let myName = "Vishal     "
// let myCode = "Code     "

// console.log(myName.trim().length);


// ----- create a function which trim the spaces and print the length of any variable --------
// trueLength - by using this we are able to perform that task so we have to create this function


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.vishal = function(){
    console.log("Vishal is present in all objects");
}

// myHeros.vishal()
// heroPower.vishal()

// If you define method to directly to Object then it will by accessable by all object and array .
// But if you only define method in specific array then it would not accessable by other or object.

Array.prototype.heyVishal = function(){
    console.log("Vishal say hello");
}

// myHeros.heyVishal() // Array is able to access that function
// heroPower.heyVishal() // object not able to access that function

// ----------- inheritance--------------

// OutDated approach 

const User = {
    name:"BGMI",
    email:"BGMI@gamil.com"
}

const Teacher = {
    makeVideo:true
}

const TeacherSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:"JS assignment",
    fullTime: true,
    __proto__:TeacherSupport// use to access the another object properties
}

//outside the object assign properties 
Teacher.__proto__ = User


// Modern date approach

Object.setPrototypeOf(TeacherSupport, Teacher)

// --------- Problem solution ---------

let anotherUsername = "CodeAurFun       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Vishal        ".trueLength()
"iceTeaPeelo       ".trueLength()