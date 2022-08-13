let nav = document.querySelector(".nav");
let navList = document.querySelector(".nav .list");
let menuShow = document.querySelector(".listed .show");
let menuHide = document.querySelector(".listed .hide");

window.onscroll = function () {
    if (window.scrollY >= 30) {
        nav.style.backgroundColor = "white";
    } else{ 
        nav.style.backgroundColor = "transparent";
    }
}

menuShow.onclick = function () {
    navList.style.display = "inline";
    menuShow.style.display = "none";
    menuHide.style.display = "inline";
}


menuHide.onclick = function () {
    navList.style.display = "none";
    menuShow.style.display = "inline";
    menuHide.style.display = "none";
}
