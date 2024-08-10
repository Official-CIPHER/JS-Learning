let arr = [
    {
        dp:"https://images.pexels.com/photos/12785599/pexels-photo-12785599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        story: "https://images.pexels.com/photos/12779585/pexels-photo-12779585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp:"https://images.pexels.com/photos/12792288/pexels-photo-12792288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        story: "https://images.pexels.com/photos/12783894/pexels-photo-12783894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        dp:"https://images.pexels.com/photos/12798325/pexels-photo-12798325.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/8542673/pexels-photo-8542673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        dp:"https://images.pexels.com/photos/3225519/pexels-photo-3225519.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/2667691/pexels-photo-2667691.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
]

let clutter = ""

const stories = document.querySelector("#stories")

arr.forEach((elem , i)=>{
    clutter += `<div class="story">
                <img id="${i}" src="${elem.dp}" alt="">
            </div>`
})

stories.innerHTML = clutter

stories.addEventListener("click",function(e){
    let story = arr[e.target.id].story

    const full = document.querySelector("#full-screen")

   full.style.display = "block"
   full.style.backgroundImage = `url(${story})`


   setTimeout(() => {
    full.style.display = "none"
   },3000);
})