let minutos = document.getElementById('minutos');
let iniciar = document.getElementById('iniciar');
let segundos = document.getElementById('segundos');
var pause = document.getElementById('pause');
var intervalo;
var isPlaying = false;

iniciar.addEventListener('click', handleEvent);
pause.addEventListener('click', handleEventPause);

function handleEvent(event) {
  isPlaying = true;
  toggleButtons();
  intervalo = setInterval(function () {
    let sec = getSegundos();
    let min = getMinutos();
    sec--;
    atualizaSegundos(sec < 10 ? '0' + sec : sec);
    if (sec == 0 && min == 0) {
      clearInterval(intervalo);
    }
    if (sec == 0 && min > 0) {
      min--;
      atualizaMinutos(min < 10 ? '0' + min : min);
      atualizaSegundos(59);
    }
  }, 1000);
}

function toggleButtons() {
  if (isPlaying) {
    iniciar.style.visibility = 'hidden';
    pause.style.visibility = 'visible';
  } else {
    pause.style.visibility = 'hidden';
    iniciar.style.visibility = 'visible';
  }
}

function handleEventPause(event) {
  isPlaying = false;
  clearInterval(intervalo);
  toggleButtons();
}

function atualizaSegundos(num) {
  segundos.innerHTML = num;
}
function atualizaMinutos(num) {
  minutos.innerHTML = num;
}

function getMinutos() {
  return minutos.innerHTML;
}
function getSegundos() {
  return segundos.innerHTML;
}
