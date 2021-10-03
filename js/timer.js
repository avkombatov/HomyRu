let date = new Date(2022, 0, 1);

function timer() {
  let now = new Date();
//   let timerBlock = document.getElementById('timer');
let timerBlock = document.querySelectorAll('.timer');
  let time = date - now;

  let days = Math.floor(time / 1000 / 60 / 60 / 24);
  days = days < 10 ? "0" + days : days;

  let hours = Math.floor(time / 1000 / 60 / 60) % 24;
  hours = hours < 10 ? "0" + hours : hours;

  let minutes = Math.floor(time / 1000 / 60) % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let seconds = Math.floor(time / 1000) % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // timerBlock.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  for(el of timerBlock){
       el.innerHTML = `
  <div class="timer__main">
      <div class="timer">
        <div class="timer__block">${days}</div>:
        <div class="timer__block">${hours}</div>:
        <div class="timer__block">${minutes}</div>
     </div>
   </div>`
  }
 }

timer();
setInterval(timer, 1000);