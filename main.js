


let text= document.getElementById("text-name")
let btn_change_text =document.getElementById("btn-1")

btn_change_text.addEventListener("click", ()=>{ 

    text.innerText="Zelda"
})



let btn_change_increase_size_text =document.getElementById("btn-2")

btn_change_increase_size_text.addEventListener("click",()=>{
    text.style.fontSize="100px"
})


let btn_change_decrease_size_text =document.getElementById("btn-3")

btn_change_decrease_size_text.addEventListener("click",()=>{
    text.style.fontSize="small"
})



let btn_change_color_text =document.getElementById("btn-4")

btn_change_color_text.addEventListener("click",()=>{
    text.style.color="white"
})


let btn_change_background_color =document.getElementById("btn-5")

btn_change_background_color.addEventListener("click",()=>{
    text.style.backgroundColor="green"
})



let btn_add_img =document.getElementById("btn-6")

btn_change_background_color.addEventListener("click",()=>{
    text.style.backgroundImage="url("/lab2-event/the-legend-of-zelda-breath-of-the-wild-switch-switch-jogo-nintendo-eshop-europe-cover.jpg)"
})

