function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
}
const x = document.getElementById("menu");
x.onclick = toggleMenu;

document.getElementById("date").innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

document.getElementById("year").innerHTML = new Date().getFullYear()

document.getElementById('modified').textContent = document.lastModified



