const typedCityName = document.querySelector("#CITY");
const formClassEl = document.querySelector("#formClass");

const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('currentWeather-Items')
const weatherForecastEl = document.getElementById('weatherForecast')
const currenttempEl = document.getElementById('currentTemp')

const TEMP_El = document.querySelector("#TEMP");
const HUMIDITY_El = document.querySelector("#HUMIDITY");
const WINDSPEED_El = document.querySelector("#WINDSPEED");
const UVI_El = document.querySelector("#UVI");

const dayoftheweekEl = document.getElementById("dayoftheweek")

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// const API_Key = '&appid=fb0edd857bab8092d150bbc076d9150a'

var formSubmitHandler = function(event) {

    event.preventDefault();
    
    let = cityName = typedCityName.value.trim();

    if (cityName) {
        getWeatherData(cityName)
    }
}

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrsFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    dayoftheweekEl.innerHTML = days[day]
    timeEl.innerHTML = hoursIn12HrsFormat + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
}, 1000)

function getWeatherData (cityname) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=fb0edd857bab8092d150bbc076d9150a";
    fetch(apiUrl)
        .then(response => response.json()).then(data => {
            console.log(data)
            let TEMPSTRING = JSON.stringify(data.main.temp)
            let HUMIDITYSTRING = JSON.stringify(data.main.humidity)
            let WINDSPEEDSTRING = JSON.stringify(data.wind.speed)
            
            
            TEMP_El.innerHTML = TEMPSTRING
            HUMIDITY_El.innerHTML = HUMIDITYSTRING
            WINDSPEED_El.innerHTML = WINDSPEEDSTRING
    })
}
// temperature, the humidity, the wind speed, and the UV index
// function showWeatherData(data) {

// }

formClassEl.addEventListener("click", formSubmitHandler)