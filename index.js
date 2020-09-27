

let navbar = document.getElementById("navbar")
let heroIndicator = document.getElementById("hero-indicator")

var navOff = navbar.offsetTop;
var indOff = document.getElementById("indicator").offsetTop - 100;

console.log(heroIndicator);
window.onscroll = function stick() {
    
    if(window.pageYOffset >= navOff){
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky");

    }

    if( window.pageYOffset <= indOff){
        heroIndicator.classList.add("bounce");
        console.log("hello")
    }else {
        heroIndicator.classList.remove("bounce");
    }

    

}