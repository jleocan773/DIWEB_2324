document.addEventListener("DOMContentLoaded", function () {
  const accesibilidadIcon = document.querySelector(".accesibilidad");
  const body = document.querySelector("body");
  const form = document.querySelector(".zonaFormulario");

  accesibilidadIcon.addEventListener("click", function () {
    console.log("Clicked accessibility icon");
    body.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
    form.style.fontFamily = "'OpenDyslexic3-Regular', Arial, sans-serif";
  });
});
