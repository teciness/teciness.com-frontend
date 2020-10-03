let navbar = document.getElementById("navbar")
let heroIndicator = document.getElementById("hero-indicator")
let heroSection = document.getElementById("hero")
var navOff = navbar.offsetTop;
var indOff = document.getElementById("indicator").offsetTop - 100;

console.log(heroIndicator);
window.onscroll = function stick() {

    if (window.pageYOffset >= navOff) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.pageYOffset <= indOff) {
        heroIndicator.classList.add("bounce");
        console.log("hello")
    } else {
        heroIndicator.classList.remove("bounce");
    }

    heroIndicator.style.opacity = 1 - (window.pageYOffset / heroSection.offsetHeight);

}






// This is the navbar interactivity


let hamburgerClicked = false;

let hamburger = document.getElementById("hamburger")
let exit = document.getElementById("exit");
let dropdown = document.getElementById("dropdown")



hamburger.addEventListener("click", (e) => {

    exit.classList.add("exit");

    hamburger.classList.remove("hamburger");
    hamburger.classList.add("invis");

    dropdown.classList.remove("slide-out");

    dropdown.classList.add("slide-in");

})

exit.addEventListener("click", (e) => {

    hamburger.classList.add("hamburger");

    exit.classList.add("invis");
    exit.classList.remove("exit");


    dropdown.classList.remove("slide-in");

    dropdown.classList.add("slide-out");

    setTimeout(() => dropdown.classList.remove("slide-out"), 300);

})