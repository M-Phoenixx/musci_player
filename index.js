const heart = document.getElementById('heart');
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const playbg = document.getElementById('playbg')
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
let paly = 0;
playbg.addEventListener('click',()=>{
    if(paly == 0){
        pause.style.display = 'block'
        play.style.display ='none'
        paly =1;
    }
    else{
        pause.style.display = 'none'
        play.style.display ='block'
        paly =0;
    }
})