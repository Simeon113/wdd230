

const requestURL = 'https://simeon113.github.io/wdd230/chamber/data/data.json';
// const spotlight = document.querySelector('.spotlight');


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
    let spotlight = document.createElement('section');
    let name = document.createElement('h1');
    let logo = document.createElement('img')
    let h2 = document.createElement('h2');
    let link = document.createElement('a');

    name.innerText = buisness.name;

    logo.setAttribute('src', buisness.imageurl);
    logo.setAttribute('alt', `${buisness.name} Logo`);
    logo.setAttribute('loading', 'lazy');

    h2.innerText = `${buisness.address} 
    ${buisness.phone}`;

    link.setAttribute('href', buisness.website)
    link.innerText = `${buisness.name}'s Website`




    spotlight.appendChild(name)
    spotlight.appendChild(logo);
    spotlight.appendChild(h2);
    spotlight.appendChild(link)



    document.querySelector('div.spotlight').appendChild(spotlight);
}
