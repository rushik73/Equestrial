let productImageUrls = 
	['/shrin.webp', '/biden.jpg', '/biden.png', '/horse.jpg'];

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

