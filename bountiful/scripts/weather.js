const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');

const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');


let date = new Date()
let tommorow = date.getDay() + 1
let dayaftertommorow = tommorow + 1
let dayafterdayaftertommorrow = dayaftertommorow + 1

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Beaufort&units=imperial&appid=eb7b5335198bc8e61f5772e518b224ab'
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Beaufort&units=imperial&appid=eb7b5335198bc8e61f5772e518b224ab'

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
async function apiFetch() {
    try {
        const response = await fetch(forcastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResultsForcast(data);
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
function displayResultsForcast(weatherData) {
    let TempOne = weatherData.list[8].main.temp
    let TempTwo = weatherData.list[16].main.temp
    let TempThree = weatherData.list[24].main.temp



    day1.innerHTML = `${days[tommorow]} :<strong>${TempOne}</strong>°F`;
    day2.innerHTML = `${days[dayaftertommorow]} :<strong>${TempTwo}</strong>°F`;
    day3.innerHTML = `${days[dayafterdayaftertommorrow]} :<strong>${TempThree}</strong>°F`;





}










