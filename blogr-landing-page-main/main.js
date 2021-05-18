let nav_content = document.getElementById("nav-content")
let nav_c_dropdown__item = document.querySelectorAll(".c-dropdown__item")
var width = window.matchMedia("(max-width: 772px)")

function myFunction(width) {
    if (width.matches) { // If media query matches
        nav_content.style.display = "none"
        document.querySelectorAll(".icon-arrow").forEach((el) => {
            el.setAttribute("src", "./images/icon-arrow-dark.svg")
        })
    } else {
        nav_content.style.display = "flex"
        document.querySelectorAll(".icon-arrow").forEach((el) => {
            el.setAttribute("src", "./images/icon-arrow-light.svg")
        })
    }
}
window.onscroll = function() {
    let myNav = document.getElementById('mynav');
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("nav-colored")
        myNav.classList.remove("nav-transparent")
    } else {
        myNav.classList.add("nav-transparent")
        myNav.classList.remove("nav-colored")
    }
};
document.getElementById("bt-nav").addEventListener("click", function() {
    if (nav_content.style.display == "none") {
        nav_content.style.display = "flex"
    } else {
        nav_content.style.display = "none"
    }
})
document.querySelectorAll(".c-dropdown__item").forEach(function(elX) {
    elX.addEventListener("click", function() {
        let c_dropdown__submenu = elX.querySelector(".c-dropdown__submenu");
        if (c_dropdown__submenu.style.display == "" || c_dropdown__submenu.style.display == "none") {
            for (let i = 0; i < nav_c_dropdown__item.length; i++) {
                nav_c_dropdown__item[i].querySelector(".icon-arrow").style.transform = "rotate(0deg)"
                nav_c_dropdown__item[i].style.opacity = "1"
                nav_c_dropdown__item[i].querySelector(".c-dropdown__submenu").style.display = "none"
            }
            elX.querySelector(".icon-arrow").style.transform = "rotate(180deg)"
            if (width.matches) {
                elX.style.opacity = "0.8"
                c_dropdown__submenu.style.position = "relative"
            } else {
                c_dropdown__submenu.style.position = "absolute"
            }
            c_dropdown__submenu.style.display = "flex"
            c_dropdown__submenu.style.visibility = "visible"
        } else {
            elX.querySelector(".icon-arrow").style.transform = "rotate(0deg)"
            c_dropdown__submenu.style.transform = "transform: translateX(-50%) rotate(0deg)"
            elX.style.opacity = "1"
            c_dropdown__submenu.style.display = "none"
        }
    })
})
myFunction(width) // Call listener function at run time
width.addListener(myFunction) // Attach listener function on state changes