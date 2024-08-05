// -------------- Dates -----------------

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // date and time into readable form 
// output - Fri Jul 26 2024 13:01:47 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // use to define date only 
// output - fri jul 26 2024

// console.log(myDate.toTimeString()); // define time only  
// output - 13:04:10 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleDateString());// use for viewable date format 
// output - 26/7/2024

// console.log(myDate.toLocaleTimeString()); // use for  viewable time format
// output - 1:08:01 pm

// console.log(myDate.toLocaleString());// use for mix of toLocaleTimeString and toLocaleDateString 
// output - 26/7/2024, 1:11:08 pm

// console.log(myDate.toJSON()); // 2024-07-26T07:39:03.059Z

// console.log(typeof myDate); // object


// to define date 
let myCreatedDate = new Date(2024 , 6,26)

// console.log(myCreatedDate.toDateString()); // output - Fri Jul 26 2024


//to define date with time
let myCreatedDateTime = new Date(2024 , 6 ,26 , 13,17)

//console.log(myCreatedDateTime.toLocaleString()); // output - 26/7/2024, 1:17:00 pm

// another syntax of date and time

// let myCreatedDateSynt =  new Date("2024-07-26")
let myCreatedDateSynt =  new Date("07-26-2024")
// console.log(myCreatedDateSynt.toLocaleString()); 


// ___________ TIME STAMP ____________

let myTimeStamp = Date.now();

// millisecond

// console.log(myTimeStamp); // output - 1721980627332 // time in millisecond from 1 jan 1970

// console.log(myCreatedDateSynt.getTime()); // output- 1721932200000 ms // for compare and always compare in millisecond

// convert in second 
// console.log(Math.floor(Date.now()/1000));


//--------Some more method of date-------
 
let newDate = new Date()
 
// for month
// console.log(newDate.getMonth() + 1); // use to get month from whole date data 
// output - 7 (July)

// for day 
//console.log(newDate.getDay()); // use to get day from whole date data 
// output - 5 (Friday)

// for year
// console.log(newDate.getFullYear()); // use get year 
// output - 2024

// for date
//console.log(newDate.getDate()); // use to get the date 
// output - 26 


// customize date and time using toLocaleString

console.log(newDate.toLocaleString('default',{
    weekday:"long",
})) // use for more specified value
