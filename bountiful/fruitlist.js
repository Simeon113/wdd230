

const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';



function get(requestURL) {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruits = jsonObject['fruits'];
        fruits.foreach(displayFruits);
        })
    }



get(requestURL, "Initial")

function displayFruits(fruit) {
       let option = document.createElement('value');
       let fruitchoice = document.createElement('input')
       fruitchoice.setAttribute("type", checkbox)
       fruitchoice.setAttribute("name", option)
       fruitchoice.setAttribute("value", fruit.name)
       option.innerText = fruit.name
       option.appendChild(fruitchoice)
       document.querySelector('#fruits').appendChild(option);
    }

function submited() {
    let display = document.createElement(div)
    let fname = document.querySelector("#fname").textContent
    let lname = document.querySelector("lname").textContent
    let email = document.querySelector('#email').textContent
    let phone = document.querySelector('#phone').textContent
    let info = document.createElement('p')
    info.innerText = `Name: ${fname} ${lname}
    Email: ${email}
    Phone: ${phone}`
    display.appendChild(info);
    let smoothieform = document.querySelector('#smoothieform')
    document.querySelector('#form').removeChild(smoothieform)
    document.querySelector('#fruits').appendChild(display)
}

const create = document.querySelector("formBtn")
create.addEventListener("onclick", submited)




