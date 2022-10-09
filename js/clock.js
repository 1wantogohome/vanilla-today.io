const date = document.getElementById("date");
const clock = document.getElementById("clock");
const todays = new Date();

function getClock() {

    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


function getDate() {
    const year = todays.getFullYear();
    const month = String(todays.getMonth()+1).padStart(2, "0");
    const day = String(todays.getDate()).padStart(2, "0");

    date.innerText = `${year} ${month} ${day}`;
}

getDate();


const insertName = document.getElementById("nameinput");
const Name = document.querySelector("#nameinput>input");
const greeting = document.getElementById("greeting");
const logoutBtn = document.getElementById("logoutbtn");
const logoutConfirm = document.getElementById("logout_confirm");
const yesbtn = document.getElementById("yes");
const nobtn = document.getElementById("no");
const USERNAME = "username";
const HIDDEN = "hidden";
const FLEX = "flex";


// 로그인
function onSubmit(event) {
    event.preventDefault();

    const username = Name.value;
    localStorage.setItem(USERNAME, username);
    insertName.classList.add(HIDDEN);
    logoutBtn.classList.remove(HIDDEN);

    showGreeting(username);
}

function showGreeting(username) {

    const todayDate = new Date();
    const timeGreeting = todayDate.getHours();

    if (timeGreeting >= 6 && timeGreeting < 12) {
        greeting.innerText = `${username}, 오늘 하루도 화이팅!`;
    } else if (timeGreeting >= 12 && timeGreeting < 15) {
        greeting.innerText = `좋은 점심이에요, ${username}`;
    } else if (timeGreeting >= 15 && timeGreeting < 18) {
        greeting.innerText = `좋은 오후네요, ${username}`;
    } else if (timeGreeting >= 19 && timeGreeting < 21) {
        greeting.innerText = `좋은 저녁, ${username}`;
    } else if (timeGreeting >= 21 && timeGreeting <= 23) {
        greeting.innerText = `좋은 밤 보내세요, ${username}`;
    } else if (timeGreeting >= 0 && timeGreeting < 6) {
        greeting.innerText = `좋은 새벽이에요, ${username}`;
    }

    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
    insertName.classList.remove(HIDDEN);
    greeting.classList.add(HIDDEN);
} else {
    showGreeting(savedUsername);
    insertName.classList.add(HIDDEN);
    logoutBtn.classList.remove(HIDDEN);
}

insertName.addEventListener("submit", onSubmit);


// 로그아웃
function logout() {
    logoutConfirm.classList.remove(HIDDEN);
    logoutConfirm.classList.add(FLEX);
}

function yes() {
    localStorage.removeItem(USERNAME);
    insertName.classList.remove(HIDDEN);
    greeting.classList.add(HIDDEN);
    logoutConfirm.classList.remove(FLEX);
    logoutConfirm.classList.add(HIDDEN);
    logoutBtn.classList.add(HIDDEN);
    Name.value = "";
}

function no() {
    logoutConfirm.classList.remove(FLEX);
    logoutConfirm.classList.add(HIDDEN);
    insertName.classList.add(HIDDEN);
}

logoutBtn.addEventListener("click", logout);
yesbtn.addEventListener("click", yes);
nobtn.addEventListener("click", no);


