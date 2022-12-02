

const requestURL = 'https://simeon113.github.io/wdd230/chamber/data/data.json';
// const spotlight = document.querySelector('.spotlight');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const buisnesses = jsonObject['buisnesses'];
        let index1 = Math.floor(Math.random() * 10);
        let index2 = Math.floor(Math.random() * 10);
        let index3 = Math.floor(Math.random() * 10);
        while (index1 == index2 || index1 == index3 || index2 == index3) {
            index1 = Math.floor(Math.random() * 10);
            index2 = Math.floor(Math.random() * 10);
            index3 = Math.floor(Math.random() * 10);
        } 
        displayBuisnesses(buisnesses, index1, 1);
        displayBuisnesses(buisnesses, index2, 2);
        displayBuisnesses(buisnesses, index3, 3);
    })

function displayBuisnesses(buisness, i, n) {
    let spotlight = document.createElement('section');
    let name = document.createElement('h1');
    let logo = document.createElement('img')
    let message = document.createElement('h3')
    let line = document.createElement('hr')
    let info = document.createElement('p');
    let link = document.createElement('a');

    name.innerText = buisness[i].name;

    logo.setAttribute('src', buisness[i].imageurl);
    logo.setAttribute('alt', `${buisness[i].name} Logo`);
    logo.setAttribute('loading', 'lazy');

    
    link.setAttribute('href', buisness[i].website)
    link.innerText = "Website";

    message.innerText = buisness[i].message;
    info.innerText = `${buisness[i].phone}  `;
    info.appendChild(link)





    spotlight.appendChild(name)
    spotlight.appendChild(logo);
    spotlight.appendChild(message);
    spotlight.appendChild(line)
    spotlight.appendChild(info);

    spotlight.setAttribute('id', `spotlight${n}`)


    document.querySelector(`#spotlights`).appendChild(spotlight);
}
