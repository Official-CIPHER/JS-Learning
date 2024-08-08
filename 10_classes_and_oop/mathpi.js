const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const code = {
    name:"Javascript",
    price:250,
    isAvailable: true,

    orderCourse : function(){
        console.log("Not Available")
    }
}

console.log(Object.getOwnPropertyDescriptor(code , "name"));

Object.defineProperty(code , "name" , {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(code , "name"));

for(let [key, value] of Object.entries(code)){
    
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}