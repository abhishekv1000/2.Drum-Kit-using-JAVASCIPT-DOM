![1](https://github.com/abhishekv1000/Drum-Kit-using-JAVASCIPT-DOM/assets/114013340/52249076-548f-4f39-805c-170266fd6522)


step 1 = create a front end of drum kit with 7 keys.

step 2 = in index.js , we select all keys using *queryselectorall with class *subname & listen event of click. With for loop.
         
         for(let i=0 ; i < document.querySelectorAll('.drum').length ; i++){

               document.querySelectorAll(".drum")[i].addEventListener("click",function (){ 
                          ...............................
               })
         }

step 3 = We use "this" method for seeing which key is pressed. 'this' calls botton html("<button class="w drum">w</button>")              
          for(......................................){

               ...................................("click",function (){ 
                         let click = this.innerHTML;
                         makesound(click)
                         changecolour(click)
               })
         }

step 4 = create two functions - makesound()  &&& changecolour()
         
step 5 =  make function for sound.
      
         function makesound(keyorclick){

               switch(keyorclick){
                   case('w'):
                   new Audio('sounds/tom-1.mp3').play()
                   break;
  
                   case('a'):
                   new Audio('sounds/tom-2.mp3').play()
                   break;
                   ...............................
         }}

       
step 6 = in fucntion of chaning colour , ("." + word) is use for select the css of pressed or clicked button
               &&
          letter.classList.add("pressed")  is for appiled css which is make in css file && settimeout is time for removing pressed css
          pressed css make box shadow and opacity.              
        

       function changecolour(word){
            let letter = document.querySelector("." + word)
            letter.classList.add("pressed") 

           setTimeout(()=>{
               letter.classList.remove("pressed")
           }, 200);
    
           }
