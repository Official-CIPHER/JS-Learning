// For each loop

const coding = ["js", "ruby" , "java" , "python" , "cpp"]

// 1 way:-

// coding.forEach( function (item) {
//      console.log(item);
// })

// 2 way:-
// coding.forEach( (val) => {
//     console.log(val);
// })

// 3 way:-
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// parameter are - items, index and array
// allow in callfunction 
// coding.forEach((item , index ,arr) => {
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        languageName: "java",
        languageFileName : "java"
    },
    {
        languageName: "python",
        languageFileName : "py"
    },
]


myCoding.forEach( (item) => {
      console.log(item.languageName);
})