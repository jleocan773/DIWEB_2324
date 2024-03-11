function onIniciar() {
  console.log("Hola Mundo");

  // CODIGO DEL TAB
  // 1º es conseguir todas las pestañas aka los botones
  // 2º conseguir todos los bloques de texto
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");

  // 3º Sería añadir un eventListener de click a todos los botones
  botonesTab.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log("Click en boton " + i);

      // RECORRER TODOS LOS BOTONES Y QUITAR CLASE ACTIVO
      // Le quitamos la clase activo al resto de botones
      botonesTab.forEach((botonFE, j) => {
        botonFE.classList.remove("activo");
        bloquesTexto[j].classList.remove("activo");
      });

      // Y le ponemos activo al boton AL QUE LE HEMOS HECHO CLICK
      boton.classList.add("activo");
      bloquesTexto[i].classList.add("activo");
    });
  });

  // CÓDIGO DEL ACORDEON
  // 1º Seleccionamos los nodos en cuestión. Los nodos que vamos a tratar
  // h2Titulo va a tener un eventListener de click
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  // pContenido es al que vamos a modificarle las clases css... la classList
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  h2Titulo.forEach((nodo, i) => {
    nodo.addEventListener("click", () => {
      // Si el pContenido tiene la clase css divContenedor__contenido--activo, la quitamos
      if (
        pContenido[i].classList.contains("divContenedor__contenido--activo")
      ) {
        pContenido[i].classList.remove("divContenedor__contenido--activo");
      } else {
        // y si no, la añadimos
        pContenido[i].classList.add("divContenedor__contenido--activo");
      }
    });
  });


  //CÓDIGO DEL CARROUSEL
  //Seleccionamos el nodo con clase carrousel__grande
  const carrouselGrande = document.querySelector(".carrousel__grande");
  //Debemos añadir una funcionalidad clic a los botones, primeros tenemos que seleccionar TODOS los botones
  const botonesCarrousel = document.querySelectorAll(".botones__boton");

  // Una vez seleccionado los nodos, añadimos el event listener de clic a todos los botones
  botonesCarrousel.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log(`Se ha pulsado el botón número ${i} 🤠`);
      // Recorremos todos los botones
      // Le quitamos la clase activo al resto de botones
      botonesCarrousel.forEach((botonFE) => {
        botonFE.classList.remove("activo");
      });
      // Le ponemos activo al boton al que le hemos hecho clic
      boton.classList.add("activo");

      //Creamos la variable que calculará los píxeles
      let calculoPx = i * - 50;
      console.log(`Click en ${i} con ${calculoPx} px`);
      carrouselGrande.style.transform = `translateX(${calculoPx}%)`;

    });
  });
}

window.onload = onIniciar();
