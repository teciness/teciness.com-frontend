

let navbar = document.getElementById("navbar")

var navOff = navbar.offsetTop;


window.onscroll = function stick() {
    
    if(window.pageYOffset >= navOff){
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }

}