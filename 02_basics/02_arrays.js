//----------------- arrays part 2 ------------------

const marvel_heros = ["thor", "Ironman" , "spiderman"]

const dc_heros = ["superman", "flash" ,"batman"]

//--------push method to join two arrays

// marvel_heros.push(dc_heros) // push array inside array
//console.log(marvel_heros);
// for accessing value of dc dc_heros
// console.log(marvel_heros[3][1]); // flash

//-------concat method to join two arrays

// const allHeros = marvel_heros.concat(dc_heros) // concat the both arrays
// console.log(allHeros);

// output - [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//-------------spread method-------
const all_new_heros = [...marvel_heros,...dc_heros]// spread operator , same output as concat
//  console.log(all_new_heros);


// ---------- flat method ----------
const another_array = [1 , 2 , 3 , [4 ,5 , 6] , 7 , [6 , 7 , [4 , 5]]]

const real_another_array = another_array.flat(Infinity) // solve the depth of array and concat it and at infinity you have give the actual depth

// console.log(real_another_array);

// console.log(Array.isArray("Vishal"));// question type // output - false // that given value is array or not

// console.log(Array.from("Vishal"));// help to create array 

// console.log(Array.from({name:"vishal"})); // empty array if key not define


//---------- of method --------------
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = [ 1,2,3,4,5]


// converting multiple variable or array into array
console.log(Array.of(score1,score2,score3,score4));

// for concat into the depth
console.log(Array.of(score1,score2,score3,score4).flat(Infinity));