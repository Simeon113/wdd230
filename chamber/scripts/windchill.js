let temperature = document.querySelector('#temperature').innerHTML
let wind = document.querySelector('#wind').innerHTML
let windchill

if (temperature <= 50 && wind > 3) {
    windchill = 35.74 + 0.6215 * temperature - 35.75 * wind ** 0.16 + 0.4275 * temperature * wind ** 0.16
    windchill = windchill.toFixed(2)
}
else {
    windchill = 'N/A'
}

document.querySelector('#windchill').innerHTML = windchill