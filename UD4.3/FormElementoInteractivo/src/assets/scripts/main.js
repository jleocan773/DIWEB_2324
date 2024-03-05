//Función para activar y desactivar elementos al hacer clic en ellos

function onIniciar() {

  //Código de Tabs Activas
  
  //Conseguir todas los botones de las pestañas
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");

  //Añadir el evento click a todos los botones
  botonesTab.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      //Recorrer todos los botones
      //Quitamos la clase activo a todos  los botones
      botonesTab.forEach((botonFE, j) => {
        botonFE.classList.remove("activo");
        bloquesTexto[j].classList.remove("activo");
      });

      boton.classList.add("activo");
      bloquesTexto[i].classList.add("activo");
    });
  });

  //Código del Acordeón
  //1º Seleccionamos todos los elementos sobre los que queremos trabajar
  //h2Titulo es sobre el que haremos clic
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  //pContenido es el que modificaremos
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  h2Titulo.forEach((nodo, i) => {
    nodo.addEventListener("click", () => {
      if (pContenido[i].classList.contains("divContenedor__contenido--activo")) {
        pContenido[i].classList.remove("divContenedor__contenido--activo");
      } else {
        pContenido[i].classList.add("divContenedor__contenido--activo");
      }
    });
  });
}

window.onload = onIniciar();
