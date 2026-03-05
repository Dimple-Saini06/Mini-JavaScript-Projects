let h = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

btn.addEventListener("click", function() {
    let a = getRandomColorValue();
    let b = getRandomColorValue();
    let c = getRandomColorValue();

    h.innerText = `rgb(${a}, ${b}, ${c})`;
    div.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
})

