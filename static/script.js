// get html elements
let rotateDiv = document.getElementById("rotate-div")
let navbar = document.querySelector("nav");

let navToggleBool = 0;

function navToggle() {
    if (navToggleBool) {
        console.log("disappear navbar!!!");
        rotateDiv.removeEventListener("click", navToggle);
        navbar.classList.remove("appear");
        rotateDiv.classList.remove("rotate");
        navToggleBool = 0;
    } else {
        console.log("appear!!!!");
        navbar.classList.add("appear");
        rotateDiv.classList.add("rotate");
        navToggleBool = 1;

        // timout or else it would toggle the listener twice and close the navbar straight away
        setTimeout(() => {
            rotateDiv.addEventListener("click", navToggle);
        }, 100)
    }
}