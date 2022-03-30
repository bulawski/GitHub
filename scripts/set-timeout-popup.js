//get the pop-up element
const popUp = document.getElementById("pop-up");

//three second delay before popup
const delay = 3000; 


let needToShowPopup = true;


/*
----------------------------
need a handler for this animation
*/
let popupAnimationHandler;
/*
track the opacity from 0-1
transparent - opaque
*/
let opacityValue = 0;
popUp.style.opacity = "0";

/*
show the pop-up after waiting for a few seconds
    setTimeout( function(){}, delayInMilliseconds );
*/
setTimeout( function(){
    //but dont show pop up if user has already started the animation
    if(needToShowPopup === true){
        //request a frame of animation
        popupAnimationHandler = requestAnimationFrame( fadeIn );
    }
} , delay);

/*
an animation for fading in the opacity
*/
function fadeIn(){
    opacityValue = opacityValue + .03;
    if(opacityValue <= 1){
        popUp.style.opacity = opacityValue;
        requestAnimationFrame( fadeIn );
    }else{
        popUp.style.opacity = 1;
    }    
}

/*
allow user to close and hide the popup after they have seen it
*/
const closePopup = document.getElementById("close-pop-up");
closePopup.addEventListener("click", function(){
   popUp.style.opacity = "0";
   //popUp.style.display = "none";
    popUp.classList.add('hidden');
});

