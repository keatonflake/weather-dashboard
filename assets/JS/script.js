
var typedCityName = document.querySelector("#CITY");
var formClassEl = document.querySelector("#formClass");

var formSubmitHandler = function(event) {

    event.preventDefault();
    
    var cityName = typedCityName.value.trim();

    if (cityName) {
        getCityForcast(cityName)
    }
}

var getCityForcast = function(selectedCity) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=fb0edd857bab8092d150bbc076d9150a";
// fetch the data
fetch(apiUrl)
    .then(function(response) {

    if (response.ok) {

        console.log(response);
    }
})
};
formClassEl.addEventListener("click", formSubmitHandler)