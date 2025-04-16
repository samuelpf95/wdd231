fetch("data/places.json")
	.then((res) => res.json())
	.then((data) => displayPlaces(data))
	.catch((err) => console.error("Error loading places:", err));

const displayPlaces = (places) => {
	const cards = document.querySelector("div.pcards");
	cards.innerHTML = "";

	places.forEach((place) => {
		let card = document.createElement("section");
		let h2 = document.createElement("h2");
		let stats = document.createElement("div");
		stats.classList.add("stats");
        card.id = "splace";

		let cost = document.createElement("p");
		let description = document.createElement("p");
		let address = document.createElement("address");

		let figure = document.createElement("figure");
		let img = document.createElement("img");
        let btn = document.createElement("button")

		h2.textContent = place.name;
		cost.textContent = `Cost: ${place.cost}`;
		description.textContent = place.description;
		address.textContent = `${place.address}`;
        btn.title = `Learn More`;
        btn.textContent = `Learn More`;
		btn.addEventListener("click", () => {
			const dialog = document.getElementById("infoDialog");
			const dialogText = document.getElementById("dialogText");
			dialogText.textContent = `The cost for ${place.name} is ${place.cost}`;
			dialog.showModal();
		});	
		img.setAttribute("src", `images/${place.image_url}`);
		img.setAttribute("alt", `${place.name} Picture`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "800");
		img.setAttribute("height", "450");

		figure.appendChild(img);
		stats.appendChild(description);
		stats.appendChild(cost);
		stats.appendChild(address);

		card.appendChild(h2);
		card.appendChild(stats);
		card.appendChild(figure);
        card.appendChild(btn);

		cards.appendChild(card);
	});
};
