# Projects related to DOM 

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project 1 - Bg color changer

```javascript 

const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',(e)=>{
      console.log(e)
      console.log(e.target)
      switch(e.target.id){
        case "grey":
          body.style.backgroundColor = e.target.id
          break;
        case "white" :
          body.style.backgroundColor = e.target.id
          break;
        case "blue":
          body.style.backgroundColor = e.target.id
          break;
        case "yellow" :
          body.style.backgroundColor = e.target.id
          break;
        case "lightgreen" :
          body.style.backgroundColor = e.target.id
          break;

        default:
          console.log("not clicking on the box")
      }
  })
})

```
Another way of solving first project : -

```javascript 

const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',(t)=>{
        console.log(t)
        console.log(t.target.id)

        if(t.target.id === "grey"){
          body.style.backgroundColor = t.target.id 
        }
        if(t.target.id === "white"){
          body.style.backgroundColor = t.target.id 
        }
        if(t.target.id === "blue"){
          body.style.backgroundColor = t.target.id 
        }
        if(t.target.id === "yellow"){
          body.style.backgroundColor = t.target.id 
        }
        if(t.target.id === "lightgreen"){
          body.style.backgroundColor = t.target.id 
        }
  })
})
```

## Project 2 - BMI calculator

```javascript

const form = document.querySelector('form');

// this usecase will give you an empty value
// const height = document.querySelector('#height').value;

form.addEventListener('submit', (v) => {
  v.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = ` ${height} is Not a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = ` ${weight} is Not a valid weight`;
  } else {
    const bmi = (weight /((height*height) /10000)).toFixed(2)
     
    // result.innerHTML =
    
    
    // assignment - add extra text to show bmi under which condition and display them to user

    if(bmi<18.6){
       result.innerHTML = `<span>${bmi}</span>
       <br/>
       <span>Under Weight </span>`
    } else if (bmi >= 18.6 && bmi <= 24.9){
      result.innerHTML = `<span>${bmi}</span>
      <br/>
      <span>Normal Range</span>`
    } else{
      result.innerHTML = `<span>${bmi}</span>
      <br/>
      <span>Overweight</span>`
    }
  }
});

```

## Project 3 - Display Clock

```javascript 

const clock = document.querySelector("#clock")
const time = new Date()

setInterval(function(){
  const time = new Date()
  clock.innerHTML = time.toLocaleTimeString()
  
},1000)

//2nd way
// const addTime = document.createTextNode(`${time}`)
// clock.appendChild(addTime)

```

## Project 4 - Guess A Number

```javascript

let randomNumber = parseInt((Math.random()) * 100 + 1 )

const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const guessesSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const loworHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)

    // pass the value 
    validateGuess(guess);
  });
}

function validateGuess(guess){
//
  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if(guess < 1){
    alert("Please enter a number greater than 1")
  } else if(guess > 100){
    alert("Please enter a number less than 100")
  } else {
    prevGuess.push(guess) 
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over . Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //
  if(guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame();
  } else if(guess < randomNumber) {
    displayMessage(`Number is TOOO low`)
  } else if(guess > randomNumber) {
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess){
  //

  userInput.value = ''
  guessesSlot.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  //
  loworHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  //
    userInput.value = ''
    userInput.setAttribute("disabled" , "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
  //

  const newGameButton = document.querySelector("#newGame")

  newGameButton.addEventListener("click", function(e){
   randomNumber = parseInt((Math.random()) * 100 + 1 )
   prevGuess = []
   numGuess = 1 
   guessesSlot.innerHTML = ''
   remaining.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute("disabled")
   startOver.removeChild(p)

    playGame = true
  })
}
```
## Project 5 - Keyboard check

```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
            <div class = 'color'>
            <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td> // use to check the space bar button and print on diplay because by default its empty string " "
    
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `;
});

```


## Project 6 - Unlimited colors 

```javascript 
// generator a random color 

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i=0; i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)]
  }

  return color
}


let setIntervalId;
const startColorChanging = function(){
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
  if(!setIntervalId){
    setIntervalId = setInterval(changeBgColor,1000)
  }
}
const stopColorChanging = function(){
  clearInterval(setIntervalId)
  setIntervalId = null;
}

document.querySelector('#start').addEventListener('click' , startColorChanging)
document.querySelector('#stop').addEventListener('click' , stopColorChanging)
```

## Project 7 - Order Cart
```javascript 
let head = document.querySelector('h5')

let iphone = document.querySelector('img')

let btn = document.querySelector('#add')

let check = 0

btn.addEventListener('click' , function(){
    if (check == 0) {
        setTimeout(()=>{
            head.innerHTML = "Successfully Added"
            btn.innerHTML = "Remove from cart"
            head.style.color = "#3ec63ac9"
            iphone.style.transform ="scale(1.2)"
            iphone.style.transition ="transform 0.4s ease"
    
            setTimeout(() => {
                iphone.style.transform ="scale(1)"
            iphone.style.transition ="transform 0.4s ease"
            }, 100);
    
        },100)
        // console.log("ha ji ho gaya order place");
        
        check = 1
    } else {
        setTimeout(()=>{
            head.innerHTML = "Order Removed "
            setTimeout(()=>{
                head.innerHTML = "Price :- $599"
                head.style.color = "gray"
            },2000)
            head.style.color = "crimson"
            btn.innerHTML = "Add to Cart"
            iphone.style.transform ="scale(1.2)"
            iphone.style.transition ="transform 0.4s ease"
    
            setTimeout(() => {
                iphone.style.transform ="scale(1)"
            iphone.style.transition ="transform 0.4s ease"
            }, 100);
    
        },100)
        check = 0
    }
})
```
## Project 8 - Insta Like Feature
```javascript
let con = document.querySelector('#container')

let love = document.querySelector('i')

let bottom = document.querySelector('#bottom')

let like = document.querySelector('h5')

let count = 0

con.addEventListener('dblclick', function () {
    // alert("double clicked")

    love.style.transform = 'translate(-50%,-50%) scale(1)'
    love.style.opacity = 0.8
    love.style.color = "red"


    bottom.style.color = "red"

    bottom.style.transform = 'scale(1.5)'

    like.innerHTML = "1"

    count = 1
    setTimeout(() => {
        bottom.style.transform = 'scale(1)'
    }, 400);

    setTimeout(function () {
        love.style.opacity = 0
    }, 1000)

    setTimeout(() => {
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 2000);

   
})

bottom.addEventListener('click', function () {
    if (count == 0) {
        bottom.style.color = "red"
        like.innerHTML = "1"

        setTimeout(() => {
            alert("You liked the Image")
        }, 200);
        count = 1
    } else {

        bottom.style.color = "#fff"
        like.innerHTML = ""

        setTimeout(() => {
            alert("You Unliked the Image")
        }, 200);
        count = 0
    }
})
```
## Project 9 - Custom Cursor

```javascript
const main = document.querySelector('#main')
const crsr = document.querySelector(".cursor")
main.addEventListener('mousemove', function(e){
    crsr.style.left = e.x+"px" 
    crsr.style.top = e.y+"px"
})
```

## Project 10 - Cursor Moving Effect

```javascript
const elem = document.querySelectorAll(".elem")
elem.forEach(function(val){
  val.addEventListener("mouseenter", function(){
   val.childNodes[3].style.opacity = 1
  })
  val.addEventListener("mouseleave", function(){
    val.childNodes[3].style.opacity = 0
  })
  val.addEventListener("mousemove", function(e){
    val.childNodes[3].style.left = e.x + "px"
  })
})
```