

const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';



function get(requestURL) {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruits = jsonObject;

        fruits.forEach(displayFruits);

    })}

    function get2(requestURL) {
        fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const fruits = jsonObject;


            fruits.forEach(submited)
            
        })}



get(requestURL)

function displayFruits(fruit) {
       let option = document.createElement('value');
       let fruitchoice = document.createElement('input')
       fruitchoice.setAttribute("type", 'checkbox')
       fruitchoice.setAttribute("name", 'option')
       fruitchoice.setAttribute("value", fruit.name)
       option.innerText = `${fruit.name} \n`
       option.appendChild(fruitchoice)
       document.querySelector('#fruits').appendChild(option);
    }

function submited() {
    let display = document.createElement('div')
    let fname = document.querySelector("#fname").value
    let lname = document.querySelector("#lname").value
    let email = document.querySelector('#email').value
    let phone = document.querySelector('#phone').value
    let message = document.querySelector("#instruction").value
    let info = document.createElement('p')
    info.innerText = `Name: ${fname} ${lname}
    Email: ${email}
    Phone: ${phone}
    Special Instructions: ${message}`
    display.appendChild(info);
    var list = document.getElementById('fruits');
    var options = list.children;
    for(var i=0; i<options.length; i++){
        var option = options[i];
        let check = option.children[1]
        let ans = check.checked
        if (ans == true) 

        {

        }
    }
    let smoothieform = document.querySelector('#smoothieform')
    document.querySelector('#form').removeChild(smoothieform)
    document.querySelector('#form').appendChild(display)
    let specialtydrinksnumber = window.localStorage.getItem('specialtydrink')
    if (specialtydrinksnumber == 'null')
    {
        specialtydrinksnumber = 1
    }
    if (specialtydrinksnumber != 'null')
    {
        int = parseInt(specialtydrinksnumber)
        int += 1
        specialtydrinksnumber = int
    }
    localStorage.setItem('specialtydrink', specialtydrinksnumber)
}







