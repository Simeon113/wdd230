

const requestURL = 'https://simeon113.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const buisnesses = jsonObject['buisnesses'];
        buisnesses.forEach(displayBuisnesses);
    })

function displayBuisnesses(buisness) {
    let card = document.createElement('section');
    let logo = document.createElement('img')
    let h2 = document.createElement('h2');
    let link = document.createElement('a');

    logo.setAttribute('src', buisness.imageurl);
    logo.setAttribute('alt', `${buisness.name} Logo`);
    logo.setAttribute('loading', 'lazy');

    h2.innerText = `${buisness.address} 
    ${buisness.phone}`;

    link.setAttribute('href', buisness.website)
    link.innerText = buisness.website





    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(link)



    document.querySelector('div.cards').appendChild(card);
}

