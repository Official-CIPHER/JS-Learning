// ------------- reduced method ---------

//mostly used in shoping cart to total the value if add something


const myNums = [1, 2, 3]

// using normal function

// const myTotal = myNums.reduce( function(acc , cur) {
// console.log(`acc : ${acc} and cur : ${cur}`);
//     return acc + cur
// }, 0 )

// 0 - accumulator initial value 


// using arrow function

const myTotal = myNums.reduce((acc,cur)=>{
    // console.log(`acc : ${acc} and cur : ${cur}`);
    return acc + cur
}, 0 )


// console.log(myTotal);


// shoping cart example to total the price you will have to pay


const shoppinhCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalprice = shoppinhCart.reduce((acc , item)=>acc + item.price,0)

console.log(totalprice);