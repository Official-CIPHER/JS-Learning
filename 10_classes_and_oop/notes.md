# Javascript and Classes
Yes, Javascript does have classes. This feature was introduced with the ECMAScript2015 specification (often referred to as ES6). However, it's important to note that Javascript is primarily a prototype-based language, and its classses are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words it provides a more familiar syntax for developers coming from  class-based languages such as Java or C++, but under the hood , it work somewhat differently.

```javascript
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    console.log(`I work as a ${this.jobTitle}.`);
  }
}

const employee1 = new Employee('Bob', 40, 'Software Engineer');
employee1.greet(); // Output: Hello, my name is Bob and I am 40 years old.
employee1.describeJob(); // Output: I work as a Software Engineer.

```

## OOP 
JavaScript’s OOP capabilities offer a flexible approach to managing and organizing code, combining both classical and prototype-based paradigms. 


## Object 
- collection of properties and method
- toLowerCase , toUpperCase and Promises all are object Exmaple

## Why use OOP
Object-Oriented Programming (OOP) in JavaScript can offer several benefits, especially for managing and organizing complex codebases. Here’s why you might choose to use OOP principles in JavaScript:

1. Organize and Modularize Code
2. Encapsulation
3. Inheritance
4. Polymorphism
5. Code Reusability
6. Maintainability and Scalability
7. Alignment with Real-World Modeling

Using OOP in JavaScript can enhance code organization, promote code reuse, and improve maintainability.

## 4 Pillar of OOPs 
1. Abstraction -  
It is a concept where you define a common interface or behavior for a group of related classes while hiding the internal details of how those behaviors are implemented.
2. Encapsulation -  
Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It involves bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class, and restricting direct access to some of the object's components. This is done to protect the internal state of the object and ensure that it can only be modified through well-defined interfaces.
3. Inheritance -  
Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows one class (the child or subclass) to inherit the properties and methods of another class (the parent or superclass). This mechanism promotes code reuse and establishes a natural hierarchy between classes.
4. Polymorphism -  
Polymorphism is a key principle in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. The term "polymorphism" comes from Greek, meaning "many shapes." It essentially means that different classes can be accessed through the same interface, allowing a single function or method to work in different ways depending on the object it is operating on.   
<b>Tyeps of Polymorphism - </b>  
a. Compile-Time Polymorphism (Static Binding):   
• Method Overloading: Multiple methods with the same name but different parameters within the same class.   
• Operator Overloading: Overloading operators to perform operations in different ways based on their operands.  
<b>NOTE </b>: - JavaScript does not support method overloading or operator overloading natively, as method names are not differentiated by parameters in JavaScript.   
b. Run-Time Polymorphism (Dynamic Binding):  
• Method Overriding: A subclass provides a specific implementation of a method that is already defined in its superclass.


## new keyword
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

ex - 
```javascript
let promise  = new Promise()
```



1. Using new keyword will create a empty object which is also referred as instance
2. Constructor function call due new keyword , it'll pack all the argument and give to you
3. All the argument are injected in this keyword
4. We'll get the function

# instanceof 
The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

## syntax
```javascript
object instanceof constructor
```

## Parameters

Object - The object to test

Constructor - Constructor to test against

## Try it
```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
```

## Output
true

true