// obsevador para carrusel
let activeCarr;
const observer = new IntersectionObserver((entries,) => {
	entries.forEach(entry =>{
		const id = entry.target.getAttribute("id");
		let slider = document.querySelector(`#slider-${id}`);
		let sliderSection = document.querySelectorAll(`.slider_section-${id}`);
		//let sliderSectionLast = sliderSection[sliderSection.length -1];
		//slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		if (id==="faqs" || id === "contactanos") {
			return;
			}
			else{	
			function Next() {
				let sliderSectionFirst = document.querySelectorAll(`.slider_section-${id}`)[0];
				slider.style.marginLeft = "-100%";
				slider.style.transition = "all .5s";
				setTimeout(function(){
					slider.style.transition = "none";
					slider.insertAdjacentElement('beforeend', sliderSectionFirst);
					slider.style.marginLeft = "0";
				},500)
			};

			if (entry.isIntersecting) {
				activeCarr = setInterval(function(){
					Next()
				}, 2000);
			} else {
				clearInterval(activeCarr);
				activeCarr = null;
			}
		}});
}, {root: null, rootMargin: '-40% 0px -60% 0px', threshold: 0});


//menu responsivo
const menu = document.getElementById('menu-respo');
console.log(menu);
const openMenuBtn = document.querySelector(".btn_menu");

function toggleMenu() {
	
	menu.classList.toggle("nav_ul_open");
}

openMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav_ul a[href^="#"]');

menuLinks.forEach(menuLinks => {
	menuLinks.addEventListener("click", function(){
		menu.classList.remove("nav_ul_open");
	})
	const hash = menuLinks.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

// bonotes preguntas
const respuestas = document.querySelectorAll(".respuesta");
const botones = document.querySelectorAll(".faqs_expandir");
const parrafos = document.querySelectorAll(".respuesta p");

for (let i = 0; i < botones.length; i++) {
	console.log(respuestas[i]);
	console.log(botones[i]);
	let altura = parrafos[i].clientHeight;
	console.log(altura);
	botones[i].addEventListener("click", () => {
		respuestas[i].classList.toggle("respuesta-abrir");
		botones[i].classList.toggle("semi-rad");

	});
};