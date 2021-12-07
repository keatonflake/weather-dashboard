// var typedCityName = document.querySelector("#CITY");
// var formClassEl = document.querySelector("#formClass");
// var weatherResultsEl = document.querySelector("#weatherResults");
// var weatherIconEl = document.querySelector("#weatherIcon");
// var tempEl = document.querySelector("#temp");

// var formSubmitHandler = function(event) {

//     event.preventDefault();
    
//     let = cityName = typedCityName.value.trim();

//     if (cityName) {
//         getCityForcast(cityName)
//     }
// }

// var getCityForcast = function(selectedCity) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=fb0edd857bab8092d150bbc076d9150a";
// // fetch the data
// fetch(apiUrl)
//     .then(function(response) {

//     if (response.ok) {
//         response.json().then(function(data) {
//             console.log(data);
//             weatherResultsEl.textContent = (data.name);
//             tempEl.innerHTML = (data.main.temp)
            

//         let SAVEDdataScript = JSON.parse(localStorage.getItem(data));
//             if(SAVEDdataScript === null) {
//                 SAVEDdataScript = [];
//             }
//             SAVEDdataScript.push(data)
//             localStorage.setItem('weather', JSON.stringify(SAVEDdataScript))
                
//         })
//     }
// })
// };

// formClassEl.addEventListener("click", formSubmitHandler)