const menu = document.getElementById('menu-respo');
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
})