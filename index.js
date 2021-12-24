//working of buttons when clicked by a user
//have to add a event selector method
//use of function is there


//document.querySelector(".set").addEventListener("click", function(){
//  alert("i got clicked");
//});
//I got the reason why she did not use, its because the entire button row is responding for the click even the space that does not have the button, it responds even if you click outside the button and that is not expected. Hope you understand... Thanks.....

//have to use loop to add addEventListener to all buttons :()

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    /* ...means this...

    document.querySelectorAll(".drum")[0].addEventListener("click", function () {
    alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[1].addEventListener("click", function () {
    alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[2].addEventListener("click", function () {
    alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[3].addEventListener("click", function () {
    alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[4].addEventListener("click", function () {
    alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[5].addEventListener("click", function () {
    alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[6].addEventListener("click", function () {
    alert("I got clicked!");
    } */
    var clicked= this.innerHTML;
    makeSound(clicked);
    addAnimation(clicked);
  });
}

//detecting key pressed

document.addEventListener("keydown",function(event){

  makeSound(event.key);

addAnimation(event.key);
});



//creating a combined function for playing sounds

function makeSound(key){

   switch (key) {

     case "w":

       var tom1 = new Audio ("sounds/tom-1.mp3");

       tom1.play();

       break;



     case "a":

       var tom2 = new Audio ("sounds/tom-2.mp3");

       tom2.play();

       break;



     case "s":

     var tom3 = new Audio ("sounds/tom-3.mp3");

     tom3.play();

     break;



     case "d":

     var tom4 = new Audio ("sounds/tom-4.mp3");

     tom4.play();

     break;



     case "j":

     var snare = new Audio ("sounds/snare.mp3");

     snare.play();

     break;



     case "k":

     var kick = new Audio ("sounds/kick-bass.mp3");

     kick.play();

     break;



     case "l":

     var crash= new Audio ("sounds/crash.mp3");

     crash.play();

     break;


   }
}

//adding animation using fuction


function addAnimation(currentKey){
 var activeButton=document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");

 //setting timeout for animation

 setTimeout(function () {
   activeButton.classList.remove("pressed");
 }, 100);
}
