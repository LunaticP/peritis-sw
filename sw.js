function calcParallax(items) {
		items.forEach(item => {
			item.children[0].style.transform = "translateY(" + ((window.scrollY + window.innerHeight - item.offsetTop) / (window.innerHeight + item.offsetHeight) * -33.33) + "%)";
		});
}

window.addEventListener('load', () => {
	let items = document.querySelectorAll('.img-sep');
	calcParallax(items);
	window.addEventListener('scroll', () => {
		calcParallax(items);
	});
});

document.getElementById("menu-button").addEventListener('click', () => {
	document.body.classList.toggle('menu-open');
});
