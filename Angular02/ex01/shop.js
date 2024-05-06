fetch("store.json")
  .then(response => response.json())
  .then(data =>
	{
		let clone = document.querySelector(".card");
		for (let i = 0; i < data.length; i++)
		{
			let test = clone.cloneNode(clone);
			test.querySelector(".card-image img").src = data[i].image
			test.querySelector(".card-title h2").innerHTML = data[i].title
			test.querySelector(".card-description h3").innerHTML = data[i].description
			test.querySelector(".card-category h3").innerHTML = data[i].category
			test.querySelector(".card-price h3").innerHTML = data[i].price
			document.querySelector(".card_container").appendChild(test)
		}
	})