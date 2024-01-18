const menuOpen = document.getElementById("_menuOpen");
const menuClose = document.getElementById("_menuClose");
const menu = document.getElementById("_menu");

menuOpen.addEventListener("click", () => {
    menu.classList.add("active");
    menu.classList.remove("inactive");
});

menuClose.addEventListener("click", () => {
    menu.classList.remove("active");
    menu.classList.add("inactive");
});

// check menu animation then disolay console log
menu.addEventListener("animationend", () => {
    if (menu.classList.contains("inactive")) {
        menu.classList.add("hide");
    } else {
        menu.classList.remove("hide");
    }
});
