const heart = document.getElementById('heart');
const play = document.getElementById('play')
const pause = document.getElementById('pause')
let color = 0;
heart.addEventListener('click',()=>{
    if(color==0){
        heart.style.color = "red";
        color =1;
    }
    else {
        heart.style.color = "black";
        color = 0;
    }
})