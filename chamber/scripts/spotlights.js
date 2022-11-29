

const requestURL = 'https://simeon113.github.io/wdd230/chamber/data/data.json';
// const spotlight = document.querySelector('.spotlight');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const buisnesses = jsonObject['buisnesses'];
        let index = Math.floor(Math.random() * 10);
        console.log(index);
        displayBuisnesses(buisnesses, index);
    })

function displayBuisnesses(buisness, i) {
    let spotlight = document.createElement('section');
    let name = document.createElement('h1');
    let logo = document.createElement('img')
    let message = document.createElement('h2')
    let info = document.createElement('p');
    let link = document.createElement('a');

    name.innerText = buisness[i].name;

    logo.setAttribute('src', buisness[i].imageurl);
    logo.setAttribute('alt', `${buisness[i].name} Logo`);
    logo.setAttribute('loading', 'lazy');

    info.innerText = `${buisness[i].phone} ${link}`;

    link.setAttribute('href', buisness[i].website)
    link.innerText = `${buisness[i].name}'s Website`




    spotlight.appendChild(name)
    spotlight.appendChild(logo);
    spotlight.appendChild(message);
    spotlight.appendChild(info);




    document.querySelector('div.spotlight').appendChild(spotlight);
}
