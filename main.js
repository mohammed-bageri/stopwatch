import "./style.css";

function startup() {
  let seconds = 0;
  let tens = 0;
  const secondText = document.getElementById("seconds");
  const tenText = document.getElementById("tens");

  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");

  let interval;

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(() => {
      tens++;

      if (tens <= 9) {
        tenText.innerHTML = "0" + tens;
      }
      if (tens > 9) {
        tenText.innerHTML = tens;
      }

      if (tens >= 100) {
        seconds++;
        tens = 0;
        secondText.innerHTML = "0" + seconds;
        tenText.innerHTML = "0" + tens;
      }

      if (seconds > 9) {
        secondText.innerHTML = seconds;
      }
      secondText.innerHTML = seconds;
    }, 10);
  };

  stopBtn.onclick = function () {
    clearInterval(interval);
  };

  resetBtn.onclick = function () {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    secondText.innerHTML = "0" + seconds;
    tenText.innerHTML = "0" + tens;
  };
}

window.onload = startup;
