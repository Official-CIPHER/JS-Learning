// for loop
// syntax - 
// for(initiation ; condition ; increament)
// {
//     do something
// }

// ----- for duplicate the value use clrl + D

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number"); // it print first
    }
    // console.log(element);

}

// console.log(element);  // element is not defined error // block scope

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
    }
    
}


// working on array 
let myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {

    //index++ - condition change is really important for not stucking in infinite loop
    const element = myArray[index];
    // console.log(element);
}


// keywords -
// break and continue

// break - use to break the control flow of code and get out from that scope

/*
for (let index = 1; index <=20 ; index++) {
     if (index == 5) {
        console.log(`Detected 5`);
        break;
     }
    console.log(`Value of i is ${index}`);
    
}
*/

// continue -
// skip for 1 time and continue working as it is for other value on condition

for (let index = 1; index <=20 ; index++) {
     if (index == 5) {
        console.log(`Detected 5`);
        continue;
     }
    console.log(`Value of i is ${index}`);
    
}
