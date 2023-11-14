function adjustZoomLevel() {
    let height = screen.height;
	let width = screen.width;

	if (width === 1920 && height === 1080) {
		document.body.style.zoom = "100%";
	} else if (width === 1280 && height === 720) {
		document.body.style.zoom = "75%";
	} else if (width === 2560 && height === 1440) {
		document.body.style.zoom = "100%";
	} else if (width === 3840 && height === 2160) {
		document.body.style.zoom = "120%";
	} else if (width === 800 && height === 600) {
		document.body.style.zoom = "60%";
	} else if (width === 1024 && height === 768) {
		document.body.style.zoom = "75%";
	} else {
		// Dodajte morebitne druge ločljivosti, ki jih želite podpreti
		document.body.style.zoom = "100%"; // Default vrednost za ostale ločljivosti
	}

}

adjustZoomLevel();