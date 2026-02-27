const hours = document.getElementById("hrs");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");


setInterval(() => {
    const clock = new Date();
    hours.innerHTML = (clock.getHours() < 10 ? "0" : "") + clock.getHours();
    minutes.innerHTML = (clock.getMinutes() < 10 ? "0" : "") + clock.getMinutes();
    seconds.innerHTML = (clock.getSeconds() < 10 ? "0" : "") + clock.getSeconds();
}, 1000)
