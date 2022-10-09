// navigator.geolocation.getCurrentPosition(
//     (position) => {
//         console.log(position.coords.latitude, position.coords.longitude);
//     }
// );

const API = "37d89115c7dd7c73dc7a643f97611062";

function getOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.getElementById("weather");
        const temp = Math.floor(data.main.temp);
        weather.innerText = `${data.name}, ${data.weather[0].main} ${temp}°C`;
    });
}

function cannotGet () {
    alert("위치 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(getOk, cannotGet);