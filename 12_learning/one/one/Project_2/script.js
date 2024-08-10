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