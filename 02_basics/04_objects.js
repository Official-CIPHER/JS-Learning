// singleton or constructor

// const tinderUser = new Object() // singleton Object // class only have single object

const tinderUser = {}// non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"vishal",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);// ? also use to check value in objects

// ------ concatination in object -----
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}

// const obj4 = Object.assign({} , obj1, obj2,obj3)
// {} use to guranteed the result will store in this and assign use to assign objects 

// spread method:-
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);


// when data comes from database
const users = [
    {
        id: 1,
        email:"v@gmail.com"
    },
    {
        id: 2,
        email:"k@gmail.com"
    },
    {
        id: 3,
        email:"s@gmail.com"
    }
]

// console.log(users[0].id);  // use to access object inside array
// console.log(users[0].email);
// console.log(users[1].id);
// console.log(users[1].email);
// console.log(users[2].id);
// console.log(users[2].email);

// console.log(tinderUser);

// way to access key and we get into array form
// console.log(Object.keys(tinderUser));

//  way to access values and we get into array form
// console.log(Object.values(tinderUser));

// entries use to make key & value pair into array
// console.log(Object.entries(tinderUser));

// way to check for any property existence
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false



//-------------Destructuring-----------------

const course = {
    coursename:" js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor

// another way of accessing single property for multiple times, even you can change the name of property
// const {courseInstructor: instructor} = course

// console.log(instructor);

// const navbar = ({company}) => {
      // react concept for Destructuring
// }

// navbar(company = "Hitesh")


// ******************* API *************


// value in JSON(JavaScript Object Notation)
// key - string , value - string
/*
{
    "name": "Hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// API in array form
[
    {},
    {},
    {}
]


/* FOR UNDERSTANDING JSON IN BETTER WAY USE // JSONFORMATTER.ORG // */
// link:-  https://jsonformatter.org/

// for understanding json format
// link:- https://randomuser.me/
