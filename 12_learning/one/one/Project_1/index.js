let estatus = document.querySelector('h5')

let btn = document.querySelector('#add')

// let remove = document.querySelector('#remove')

let check = 0

btn.addEventListener('click', function () {
    if (check == 0) {
        estatus.innerHTML = "Followed"
        estatus.style.color = "lightgreen"
        btn.innerHTML = "Unfollow"
        check = 1

    } else {
        estatus.innerHTML = "Unfollow"
        estatus.style.color = "rgba(43, 76, 109, 0.565)"

        check = 0
    }
})

// remove.addEventListener('click', function(){
//     estatus.innerHTML = "Unfollow"
//     estatus.style.color = "rgba(43, 76, 109, 0.565)"
// })