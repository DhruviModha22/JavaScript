async function getWeather() {
    const apiKey = '4781ef991ac405f3e7a8957a10b6cf5c'; 
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == 200) { 
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `${data.main.temp} °C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.querySelector('.weather-info').style.display = 'block';
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}
