// css helper function to change styles
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

// ---------- this is for the navbar ----------

// get html elements
let rotateDiv = document.getElementById("rotate-div")
let navbar = document.querySelector("nav");
// get the navbar thats at the top of the page
let navbar2 = document.querySelector("#nav2")

let navToggleBool = 0;

function navToggle() {
    if (navToggleBool) {
        console.log("disappear navbar!!!");
        rotateDiv.removeEventListener("click", navToggle);
        navbar.classList.remove("appear");
        navbar2.classList.remove("go-away");
        rotateDiv.classList.remove("rotate");
        navToggleBool = 0;
    } else {
        console.log("appear!!!!");
        navbar.classList.add("appear");
        navbar2.classList.add("go-away");
        rotateDiv.classList.add("rotate");
        navToggleBool = 1;

        // timout or else it would toggle the listener twice and close the navbar straight away
        setTimeout(() => {
            rotateDiv.addEventListener("click", navToggle);
        }, 100)
    }
}

// ---------- for cool image thing ----------

// get the image
let image = document.querySelector("#night-city-img");

function cool3dthing(event) {
    // get cursor pos
    let curX = event.clientX;
    let curY = event.clientY;

    // get image rect
    let rect = image.getBoundingClientRect();
    let height = rect.bottom - rect.top;
    let width = rect.right - rect.left;

    // calcualate rotation
    let rotX = ((curY - rect.top) / height - 0.5) * -1;
    let rotY = (curX - rect.left) / width - 0.5;

    console.log(rotX + " " + rotY);

    css(image, {
        'transform': `rotate3d(${rotX}, ${rotY}, 0, 7.5deg) translate(${rotX * 7.5}px, ${rotY * 7.5}px)`,
    });
}

function stopcool3dthing() {
    css(image, {
        'transform': `rotate3d(0, 0, 0, 10deg)`
    });
}