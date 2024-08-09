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