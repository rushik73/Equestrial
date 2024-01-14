let productImageUrls =
	['./shrin.webp', './biden.jpg', './biden.png', './horse.jpg'];

let mainImage = document.getElementById('main-product-img');
mainImage.src = productImageUrls[0];

for (let i = 0; i < 4; i++) {
	let elem = document.getElementById('product-img-' + (i + 1));
	elem.src = productImageUrls[i];
	elem.addEventListener('mouseover', () => {
		mainImage.src = productImageUrls[i];
	});
	console.log('here');
}

document.addEventListener("DOMContentLoaded", function() {
	const navLinks = document.querySelectorAll('.nav-label');
	const currentUrl = window.location.pathname;

	navLinks.forEach(link => {
		console.log(link.getAttribute('href'))
		if (link.getAttribute('href') === currentUrl) {
			link.classList.add('active');
		}
	});
});

