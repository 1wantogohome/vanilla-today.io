const menuBtn = document.getElementById("menu_btn");
const menu = document.getElementById("left_menu");
const menuContent = document.getElementById("menu_wrap");
let i = 0;

function showMenu() {
    if (i == 0) {
        menu.style.width = "380px";
        menuContent.style.display = "flex";
        menu.style.opacity = 1;
        menuContent.style.opacity = 1;
        menuBtn.style.color = "#222";
        i++;
    } else if (i == 1) {
        menu.style.width = "0px";
        menuContent.style.display = "none";
        menu.style.opacity = 0;
        menuContent.style.opacity = 0;
        menuBtn.style.color = "#fff";
        i=0;
    }
    
}


menuBtn.addEventListener("click", showMenu);