//FOR MOUSE CLICK

for(let i=0 ; i < document.querySelectorAll('.drum').length ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    let click = this.innerHTML;
    makesound(click)
    changecolour(click)
    })
}


//FOR KEYBOARD

document.addEventListener("keypress",function(){
    
    makesound(event.key)
    changecolour(event.key)
}
)

// FUNCTION FOR CHANGE COLOUR

function changecolour(word){
    let letter = document.querySelector("." + word)

    letter.classList.add("pressed") 

    setTimeout(()=>{
        
        letter.classList.remove("pressed")
    }, 200);
    
}


// FUNCTION FOR PLAY SOUND AS PER WORD

function makesound(keyorclick){

    switch(keyorclick){
        case('w'):
        new Audio('sounds/tom-1.mp3').play()
        break;
  
        case('a'):
        new Audio('sounds/tom-2.mp3').play()
        break;
        
        case('s'):
        new Audio('sounds/tom-3.mp3').play()
        break;
  
        case('d'):
        new Audio('sounds/tom-4.mp3').play()
        break;
  
        case('j'):
        new Audio('sounds/snare.mp3').play()
        break;
  
        case('k'):
        new Audio('sounds/kick-bass.mp3').play()
        break;
  
        case('l'):
        new Audio('sounds/crash.mp3').play()
        break;
  
        default:
          console.log("me");
  
}}