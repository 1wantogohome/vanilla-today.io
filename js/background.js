const background = document.querySelector("#bg_img>img");
const bgArray = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
];


function randomBg() {
    let num = Math.floor(Math.random()*bgArray.length);
    background.src = bgArray[num];
}

randomBg();