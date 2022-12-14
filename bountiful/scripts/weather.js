const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Muskego&units=imperial&appid=eb7b5335198bc8e61f5772e518b224ab'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }


}

apiFetch();


function displayResults(weatherData) {
    let currentTempValue = weatherData.main.temp.toFixed(0)
    let humidityValue = weatherData.main.humidity

    currentTemp.innerHTML = `<strong>${currentTempValue}</strong>°F`;
    humidity.innerHTML = `Humidity: ${humidityValue}%`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    captionDesc.style.textTransform = 'capitalize'



}










