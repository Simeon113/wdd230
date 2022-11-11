const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}


const imgOptions = {
  threshold: 1
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target)
      }
  })
}, imgOptions)

images.forEach(image => {
  imgObserver.observe(image);
})

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
}
const x = document.getElementById("menu");
x.onclick = toggleMenu;

let date = new Date()

document.getElementById("date").innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);

document.getElementById("year").innerHTML = date.getFullYear()

document.getElementById('modified').textContent = document.lastModified

if (date.getDay() == 1 || date.getDay() == 2) {
    document.getElementById("meeting").style.display = 'block'}




let thisvisit = date.getTime()

  
let lastvisit = window.localStorage.getItem('last_visit')
let date_difference = thisvisit - lastvisit
let date_difference_days = (Math.round(date_difference / 1000 / 60 / 60 / 24))
localStorage.setItem('last_visit', thisvisit)

if (date_difference > 0) {
  document.querySelector('#visits').innerText = `You last visited this site ${date_difference_days} days ago`
}
else {
  document.querySelector('#visits').innerText = "This is your first time to this site"
}

window.addEventListener('load', getLoadDate)

function getLoadDate() {
  let loadDate = new Date
  return loadDate
}

document.querySelector('#loadDate').value = loadDate

const requestURL = 'https://simeon113.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const buisnesses = jsonObject['buisnesses'];
        prophets.forEach(displayBuisnesses);
    })

function displayBuisnesses(buisness) {
    let logo = document.createElement('img')
    let h2 = document.createElement('h2');
    let link = document.createElement('link');

    logo.setAttribute('src', buisness.imageurl);
    logo.setAttribute('alt', `${buisness.name} Logo`);
    logo.setAttribute('loading', 'lazy');

    h2.innerText = `${buisness.address} 
    ${buisness.phone}`;

    link.innerText = buisness.website





    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(link)



    document.querySelector('div.cards').appendChild(card);
}

