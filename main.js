document.addEventListener('DOMContentLoaded', function(){
  showInfo();
});

document.getElementById('btn-add-nota').addEventListener('click', function () {
  var nota = document.getElementById('nota');
  getInfo(nota);
  setInfo(nota);
  showInfo();
});

document.getElementById('btn-clean-nota').addEventListener('click', function () {
  cleanInfo();
  showInfo();
});

//recoger la informacion
function getInfo(nota) {
  //devuelve el texto que se introduce en el div.nota
  return nota.innerHTML;
}

//almacenar la información en local Storage
function setInfo(nota) {
  //guarda la información en local Storage
  const clave = Date.now();
  localStorage.setItem(clave, getInfo(nota));
}

//leer la información y sacarla por pantalla
function showInfo() {
  document.getElementById('show-notas').innerHTML = '';
  for (let index = 0; index < localStorage.length; index++) {
    let clave = localStorage.key(index);
    let valor = localStorage.getItem(clave);
    let elemento = `
      <div class='lista-notas nota'>
        ${valor}
      </div>`;
    document.getElementById('show-notas').innerHTML += elemento;
  }
}

//limpiar la información
function cleanInfo() {
  //limpiar local storage y pantalla
  localStorage.clear();
}