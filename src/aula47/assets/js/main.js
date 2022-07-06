function clock() {
  const clock = document.querySelector(".clock");
  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const defaultClock = document.querySelector(".default");
  let seconds = 0;
  let timer;

  document.addEventListener("click", function (e) {
    const elem = e.target;
    if (elem.classList.contains("default")) {
      clearInterval(timer);
      clock.innerHTML = "00:00:00";
      clock.classList.remove("stop");
      seconds = 0;
    }

    if (elem.classList.contains("start")) {
      clock.classList.remove("stop");
      clearInterval(timer);
      startClock();
    }

    if (elem.classList.contains("stop")) {
      clearInterval(timer);
      clock.classList.add("stop");
    }
  });

  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  function startClock() {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }
}

clock();
