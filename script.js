let minutos = document.getElementById('minutos');
let iniciar = document.getElementById('iniciar');
let segundos = document.getElementById('segundos');

iniciar.addEventListener('click', handleEvent);

function handleEvent(event) {
  var intervalo = setInterval(function () {
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
