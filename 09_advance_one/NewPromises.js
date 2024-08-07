//-------- ---callback hell --------- 

// function getCheese(callback){
//     setTimeout(() => {
//         const cheese = "🧀"
//         console.log("here is your cheese", cheese);
//         callback(cheese);
//     }, 2000);
// }

// function getDough(cheese,callback){
//     setTimeout(() => {
//         const dough = cheese + "🫓"
//         console.log("here is your dough",dough);
//         callback(dough)
//     }, 2000);
// }
// function bakePizzz(dough,callback){
//     setTimeout(() => {
//         const pizza = dough + "🍕";
//         console.log("your pizza is ready please sir take it",pizza);
//         callback(pizza)
//     }, 2000);
// }

// getCheese((cheese)=>{
//     getDough(cheese,(dough)=>{
//         bakePizzz(dough,(pizza)=>{
//             setTimeout(()=>{
//                 console.log("I got my Pizza Thank you",pizza);
//             },2000)
            
//         })
//     })  
// });


// ------------ Promise Creation --------
// const ticket = new Promise(function(resolve,reject){
//     const ticketStatus = false
//     if(ticketStatus){
//         resolve("Your ticket is  confirm")
//     }else {
//         reject("Your ticket is not confirm")
//     }
// })

// console.log(ticket);
// ticket.then((data)=>{
//     console.log("congrates sir",data)
// }).catch((data)=>{
//     console.log("Sorry please try again",data);
// }).finally(()=>{
//     console.log("Please visit our website again , have a day sir")
// })


// ---------- pizza example --------
// ------------ using promise --------


// function getCheese(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const cheese = true
//             if(cheese){
//                 resolve("Here is your cheese",cheese , "🧀")
//             } else{
//                 reject("Sorry cheese is not avaiable right now :)")
//             }
//         },2000)

//     })
// }
// function getDough(cheese){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const dough = true
//             if(dough){
//                 resolve("Here is your dough",dough,"🧀🫓")
//             } else{
//                 reject("Sorry dough is not avaiable right now :)")
//             }
//         },2000)

//     })
// }
// function bakePizzz(dough){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const pizza = false
//             if(pizza){
//                 resolve("Here is your pizza",pizza,"🍕")
//             } else{
//                 reject("Sorry pizza is not avaiable right now :)")
//             }
//         },2000)

//     })
// }

// +++++++++++++++ using then and catch+++++++++

// getCheese().then((data)=>{
//     console.log(data);
//     getDough().then((data)=>{
//         console.log(data);
//         bakePizzz().then((data)=>{
//             console.log(data,"Thank you for the pizza");
//         }).catch((data)=>{console.log(data);
//         }).finally(()=>{
//             console.log("Please visit again"); 
//         })
//     }) .catch((data)=>{console.log(data);
//     })
// }).catch((data)=>{
//     console.log(data);
// })


// +++++++++++++++ using async await +++++++++++++++++

function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese = "🧀"
            resolve(cheese)
        },2000)

    })
}
function getDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough = cheese + "🧀🫓"
            // resolve(dough)
            reject("Bad dough")
        },2000)

    })
}
function bakePizzz(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza = dough +"🍕"
            resolve(pizza)
        },2000)

    })
}

async function orderPizza(){
    try{
        const cheese = await getCheese(); 
    console.log("here is your cheese", cheese);
    const dough = await getDough (cheese);
    console.log("here is your dough", dough);
    const pizza = await bakePizzz(dough);
    console.log("here is your pizza", pizza);

    console.log("Thank you for the pizza, Please Visit again");
    } catch(err) {
        console.log(`SORRY for bad ${err}`);  
    }
}

orderPizza()