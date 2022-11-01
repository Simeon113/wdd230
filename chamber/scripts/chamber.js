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


    let imagesToLoad = document.querySelectorAll("img[data-src]");
    const loadImages = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.onload = () => {
        image.removeAttribute("data-src");
      };
    };
    
    imagesToLoad.forEach((img) => {
        loadImages(img);
      });
    
    // if ("IntersectionObserver" in window) {
    //     const observer = new IntersectionObserver((items, observer) => {
    //       items.forEach((item) => {
    //         if (item.isIntersecting) {
    //           loadImages(item.target);
    //           observer.unobserve(item.target);
    //         }
    //       });
    //     });
    //     imagesToLoad.forEach((img) => {
    //       observer.observe(img);
    //     });
    //   } else {
    //     imagesToLoad.forEach((img) => {
    //       loadImages(img);
    //     });
    //   }

    let visits = Number(window.localStorage.getItem('visits-ls'))
    visits++
    localStorage.setItem('visits-ls',visits)
    document.querySelector('#visits').innerText = visits