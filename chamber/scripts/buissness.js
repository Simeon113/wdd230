

const requestURL = 'https://simeon113.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');


function get(requestURL, type) {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const buisnesses = jsonObject['buisnesses'];
        if (type == "Grid") {
            buisnesses.forEach(displayBuisnessesGrid)
        }
        if (type == "List") {
            buisnesses.forEach(displayBuisnessesList)
        }
        if (type == "Initial") {
            var initial = "yes"
            buisnesses.forEach( function(item) {displayBuisnessesGrid(item, initial)})
        }
    })

}

get(requestURL, "Initial")

    function displayBuisnessesGrid(buisness, initial) {
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
        link.innerText = `${buisness.name}'s Website`
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(link)
        card.setAttribute("class", "grid")
        if (initial != "yes") {
            list = document.querySelector(".list")
            document.querySelector(".cards").removeChild(list);
        }
        document.querySelector('div.cards').appendChild(card);
    }

function displayBuisnessesList(buisness) {
    let card = document.createElement('div');
    let line = document.createElement('span');
    let name = document.createElement('h2');
    let info = document.createElement('p');
    let link = document.createElement('a');
    link.setAttribute('href', buisness.website)
    link.innerText = "Website";
    info.innerText = ` ${buisness.address} ${buisness.phone}  `
    name.innerText = buisness.name;
    line.appendChild(name);
    line.appendChild(info);
    line.appendChild(link);
    card.appendChild(line);
    card.setAttribute("class", "list")
    grid = document.querySelector(".grid")
    document.querySelector(".cards").removeChild(grid);
    document.querySelector('div.cards').appendChild(card);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory")

gridbutton.addEventListener("click", function() {get(requestURL, "Grid")});
listbutton.addEventListener("click", function() {get(requestURL, "List")});



