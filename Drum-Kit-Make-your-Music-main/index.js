var numberofDrumbuttons = document.querySelectorAll(".drum").length;

//var aud = new Audio(tom-1.mp3)
for (var i = 0; i < numberofDrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;

    getsound(buttoninnerhtml);

    buttonanimation(buttoninnerhtml);
    //this.classList.add("this.innerHTML");

    // console.log(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  getsound(event.key);
  buttonanimation(event.key);

});

// var aud = new Audio("sounds/tom-1.mp3");
// aud.play();

// function handleclick() {
//   alert("it clicked");
// }
function getsound(key) {
  switch (key) {
    case "w":
      var w1 = new Audio("sounds/crash.mp3");
      w1.play();
      break;
    case "a":
      var a1 = new Audio("sounds/kick-bass.mp3");
      a1.play();
      break;
    case "s":
      var s1 = new Audio("sounds/snare.mp3");
      s1.play();
      break;
    case "d":
      var d1 = new Audio("sounds/tom-1.mp3");
      d1.play();
      break;
    case "j":
      var j1 = new Audio("sounds/tom-2.mp3");
      j1.play();
      break;
    case "k":
      var k1 = new Audio("sounds/tom-3.mp3");
      k1.play();
      break;
    case "l":
      var l1 = new Audio("sounds/tom-4.mp3");
      l1.play();
      break;

    default:
      console.log("hehehe cant happen fu");
  }
}


function buttonanimation(currentkey){
    var selectbuttoncss = document.querySelector("."+currentkey);

    selectbuttoncss.classList.add("pressed");

    setTimeout(function(){
        selectbuttoncss.classList.remove("pressed");
    },100);
    //1000 = 1 sec;

}