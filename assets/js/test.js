const typedCityName = document.querySelector("#CITY");
const formClassEl = document.querySelector("#formClass");

const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('currentWeather-Items')
const weatherForecastEl = document.getElementById('weatherForecast')
const currenttempEl = document.getElementById('currentTemp')

// to display current weather results
const TEMP_El = document.querySelector("#TEMP");
const HUMIDITY_El = document.querySelector("#HUMIDITY");
const WINDSPEED_El = document.querySelector("#WINDSPEED");
const UVI_El = document.querySelector("#UVI");

const dayoftheweekEl = document.getElementById("dayoftheweek")

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// user weather search
var formSubmitHandler = function(event) {

    event.preventDefault();
    
    let = cityName = typedCityName.value.trim();

    if (cityName) {
        getWeatherData(cityName)
    }
}

// current time for user
// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();
//     const hoursIn12HrsFormat = hour >= 13 ? hour %12: hour
//     const minutes = time.getMinutes();
//     const ampm = hour >=12 ? 'PM' : 'AM'

//     dayoftheweekEl.innerHTML = days[day]
//     timeEl.innerHTML = hoursIn12HrsFormat + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`

//     dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]
// }, 1000)



// grabbing lat and lon of user selected city
function getWeatherData (cityname) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=fb0edd857bab8092d150bbc076d9150a";
    fetch(apiUrl)
        .then(response => response.json()).then(data => {
           
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            console.log(lat)
            getweatherinbulk(lat, lon)
            
           
    })
}

// api that has current and future forecast
function getweatherinbulk(lat, lon) {
    var bulk_api = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely&units=imperial&appid=' + "de861e054e6f057842ce7c95b3ab5215";
    fetch(bulk_api).then(response => response.json()).then(data => {
        console.log(data);
        let TEMPSTRING = JSON.stringify(data.current.temp)
        let HUMIDITYSTRING = JSON.stringify(data.current.humidity)
        let WINDSPEEDSTRING = JSON.stringify(data.current.wind_speed)
        let UVISTRING = JSON.stringify(data.current.uvi)

         TEMP_El.innerHTML = TEMPSTRING
        HUMIDITY_El.innerHTML = HUMIDITYSTRING
        WINDSPEED_El.innerHTML = WINDSPEEDSTRING
        UVI_El.innerHTML = UVISTRING

        let options = {
            timeZone: 'Europe/London',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          },
          formatter = new Intl.DateTimeFormat([], options);
        
        dateEl.innerHTML = (formatter.format(new Date()));

        // showWeatherData();
})
}

// function showWeatherData (data) {
        // console.log(data.current)    
       
// }
// temperature, the humidity, the wind speed, and the UV index
// function showWeatherData(data) {

// }

formClassEl.addEventListener("click", formSubmitHandler)