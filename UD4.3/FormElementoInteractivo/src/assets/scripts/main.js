//Función para activar y desactivar elementos al hacer clic en ellos

function onIniciar() {
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
}

window.onload = onIniciar();


