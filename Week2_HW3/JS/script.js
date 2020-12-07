



const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("cell1").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell2").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell3").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell4").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell5").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell6").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell7").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell8").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell9").style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
genNew.addEventListener("click", setBg);
setBg();


//countdownTimer----------------------------------------------------
var timeoutHandle;

function countdown(minutes) {//sets variables at this parent function
  var seconds = 60;
  var mins = minutes;

  function tick() {//child function sets the parameters of the timer operations
    var counter = document.getElementById("cell5");//variable calls on input from html cell5
    var current_minutes = mins - 1;
    seconds--;

    counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);//sets condition if seconds are less than 10 the display 0 in tens position

    if (seconds > 0) {
      timeoutHandle = setTimeout(tick, 1000);//sets tick function at every 1 second

    } else {
      if (mins > 1) {
        setTimeout(function() {
          countdown(mins - 1);
        }, 1000);

      }
    }
  }
  tick();
}
