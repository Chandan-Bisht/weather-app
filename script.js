let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let icon = document.querySelector(".card-icon");
let loc = document.querySelector(".location");
const kelvin = 273;

window.onload = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // API KEY
            const apiKey = "1a6a1e70d042d2b6bbca96853d4eba85";

            // API BASE URL
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

            // Calling the API
            fetch(base)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + "," + data.sys.country;
                let getcloud = data.weather[0].icon;
                icon.innerHTML = `<img src="icons/${getcloud}.svg" style="height:10rem" alt="weather-icon" />`;
            })
        })
    }
}