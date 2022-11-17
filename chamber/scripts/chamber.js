

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

// window.addEventListener('load', getLoadDate)

// function getLoadDate() {
//   let loadDate = new Date
//   return loadDate
// }

// document.querySelector('#loadDate').value = loadDate