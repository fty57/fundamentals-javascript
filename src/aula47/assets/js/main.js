// new Date(0);

const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const defaultClock = document.querySelector(".default");
let seconds = 0;

start.addEventListener("click", function (event) {
  startClock();
});

stop.addEventListener("click", function (event) {
  alert("Cliquei no pausar");
});

defaultClock.addEventListener("click", function (event) {
  alert("Cliquei no default");
});

function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function startClock() {
  const timer = setInterval(function () {
    seconds++;
    clock.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}
