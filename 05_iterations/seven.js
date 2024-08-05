const myNums = [1 ,2 ,3 , 4, 5,6 ,7, 8,9,10]

//---------- map -------------

// - it automatically return the value 

// const newNums = myNums.map( (num) => num + 10 )

// when you open a scope { } 
// const newNums = myNums.map( (num) => {return num + 10 })

// using forEach
// let newNums = []

// myNums.forEach( (num) => {
//     if(num>=1){
//         newNums.push(num + 10)
//     }
// })


// chaining method - using two - three method concurrently
// In chaining, the value evaluted from one method goes to second method , instead of apply second method on global value.

const newNums = myNums
.map( (num) => num *10 )
.map( (num)=> num + 1 )
.filter( (num) => num >= 40)

console.log(newNums);