let openmenu = document.querySelector("#openmenu");
let nevbar = document.querySelector("header ul")
// console.log(nevbar)

openmenu.addEventListener(
    "click",
    function () {
        nevbar.classList.toggle("active")
        openmenu.classList.toggle("fa-bars")
        openmenu.classList.toggle("fa-times")
        openmenu.classList.toggle("rotate")
        openmenu.style.transition = "400ms"
    }
)