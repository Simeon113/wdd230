const sample = document.querySelector("div")
// sample.addEventListener("animationend", appear)
sample.addEventListener("animationstart", appear)

function appear() {
    document.querySelector("#example2").style.display = "block"
}

sample.className = "sample"