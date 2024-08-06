// Promises - 
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// In most of the case you consume the promises

// ---------- Creation of promises ----------
const promisesOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptograph , network

    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})
// Inside promise there is function.
// it will give you return  value 


promisesOne.then(function () {
    console.log("Promise consumed");

}) // .then() direct connection with resolve
// and inside then a callback is pass which accept the return value form above
// To connect then with resolve you need to call resolve
// It never run first , it always run after promise completion.

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})

// writting .then() directly with promise instead storing promise in some variable


// whatever the parameter we pass in resolve , we get that parameter and we can use it in .then(function(parameter))

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Vishal", email: "vishal@example.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    // console.log(user);
})


// In this we see reject as else which means if condition on satisfy then else reject part work
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JS Learning", password: "1234" })
        } else {
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})
// for reject we use .catch(function())

// Not work when you extract data 
// const userName = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })

// console.log(userName);// pending state


// chaining where one .then() return value pass to next .then() parameter
promiseFour.then((user) => {
    // console.log(user);
    return user.username
}).then((username) => {
    // console.log(username); 
}).catch(function (error) {
    // console.log(error);
}).finally(function () {
    // console.log("The promise is either resolve or reject");
}) // for proper working we have to add then() and catch() 
// output - ERROR: Something went wrong -- when let error = true
// output - JS Learning -- when let error = false

// .finally() is always execute either resolved or rejected



// ----- async await ---------
// issues - catch not handle 

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "JavaSscript Learning", password: "1234" })
        } else {
            reject('ERROR : JS went wrong')
        }
    }, 1000)
});

// output - show everything -- when let error = false
// output - show error -- when let error = true

async function consumePromisFive() {
    try {
        const response = await promiseFive // it is eventual completion object so not required ()
        // async run the function
        // await wait for the response which is either resolve or reject  
        console.log(response);
    } catch (error) {
        console.log(error);   // error handle gracefully
    }
}
// it can not directly handle the error
// to prevent the error we use try catch block 

// output -- when use try catch block -- ERROR: JS went wrong
// consumePromisFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');  // fetch is a network request so time required that's why we use await
//            const data = await response.json()
//            console.log(data);
//     } catch (error) {
//         console.log("E: ", error);

//     }

// }

// getAllUser()

//-------->using .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})