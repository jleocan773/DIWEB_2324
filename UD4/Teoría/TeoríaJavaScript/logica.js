const onWindowResized = () => {
	console.warn("Hola");
};

const cambiarDisenio = () => {
	const navNormal = document.querySelector("header .header__zonaNavegacion");
	const navHamburger = document.querySelector("header .header__zonaNavegacionHamb");
    if(!navNormal.classList.contains("hidden")){
        navNormal.classList.add("hidden");
        navHamburger.classList.remove("hidden")
    }
};

const cambiarDisenio2 = () => {
	const navNormal = document.querySelector("header .header__zonaNavegacion");
	const navHamburger = document.querySelector("header .header__zonaNavegacionHamb");
    if(navNormal.classList.contains("hidden")){
        navHamburger.classList.add("hidden")
        navNormal.classList.remove("hidden");
    }
};

window.onresize = () => {
	if (window.innerWidth <= 600) {
		cambiarDisenio();
	} else cambiarDisenio2();
};
