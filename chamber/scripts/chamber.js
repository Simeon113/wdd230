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

