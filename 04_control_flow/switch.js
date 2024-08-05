//---------- switch condition ----------
// syntax-
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}

# key - value that you always want to check
# break - use to break the execution and pull       outside , if break not  use then it will execute whole statement except default statement
# default - it execute when no any case match with the condition
*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Octuber");
        break;

    default:
        console.log("default case match");
        break;
}