// Add your OpenWeather API key here
const API_KEY = '4aa0a2c51f9040e49f9d6ec8fc6f8cea';

document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeatherData(location);
    } else {
        alert('Please enter a location');
    }
});

document.getElementById('refreshWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (location) {
        getWeatherData(location);
    } else {
        alert('Please enter a location to refresh');
    }
});

function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.log(error);
        });
}

function displayWeatherData(data) {
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const forecast = data.weather[0].main;

    document.getElementById('temperature').innerText = `Temperature: ${temperature} °C`;
    document.getElementById('condition').innerText = `Condition: ${condition}`;
    document.getElementById('forecast').innerText = `Forecast: ${forecast}`;
}
