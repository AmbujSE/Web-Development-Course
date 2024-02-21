
for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function () {
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown", function (event){

    sound(event.key);
    buttonAnimation(event.key);
});

function sound(key) {
    switch (key) {
        case "w":
            var w = new Audio('./sounds/tom-1.mp3');
            w.play();
            break;
        
        case "a":
            var a = new Audio('./sounds/tom-2.mp3');
            a.play();
            break;

        case "s":
            var s = new Audio('./sounds/tom-3.mp3');
            s.play();
            break;
        
        case "d":
            var d = new Audio('./sounds/tom-4.mp3');
            d.play();
            break;

        case "j":    
            var j = new Audio('./sounds/snare.mp3');
            j.play();
            break;

        case "k":
            var k = new Audio('./sounds/crash.mp3');
            k.play();
            break;
        
        case "l":
            var l = new Audio('./sounds/kick-bass.mp3');
            l.play();
            break;                                                              
        
        default:
            console.log(buttonInnerHTML);
            break;
    }

}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    
}








// var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();