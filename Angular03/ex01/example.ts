interface CardData {
    image: string;
    title: string;
    description: string;
    category: string;
    price: string;
}

document.addEventListener("DOMContentLoaded", () => {
    let isCardView = true;

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle View";
    document.body.prepend(toggleButton);

    fetch("store.json")
        .then(response => response.json())
        .then((data: CardData[]) => {
            renderProducts(isCardView, data);

            toggleButton.addEventListener("click", () => {
                isCardView = !isCardView;
                renderProducts(isCardView, data);
            });
        })
        .catch(error => {
            console.error("Error fetching or processing data:", error);
        });

    function renderProducts(isCardView: boolean, data: CardData[]) {
        const container = document.querySelector(".card_container") as HTMLElement;
        if (!container) return;

        container.innerHTML = ''; // Clear previous content

        if (isCardView) {
            const clone = document.querySelector(".card") as HTMLElement;
            if (!clone) return;

            data.forEach(item => {
                const test = clone.cloneNode(true) as HTMLElement;
                const imageElem = test.querySelector(".card-image img") as HTMLImageElement;
                const titleElem = test.querySelector(".card-title h2") as HTMLElement;
                const descriptionElem = test.querySelector(".card-description h3") as HTMLElement;
                const categoryElem = test.querySelector(".card-category h3") as HTMLElement;
                const priceElem = test.querySelector(".card-price h3") as HTMLElement;

                if (imageElem) imageElem.src = item.image;
                if (titleElem) titleElem.innerHTML = item.title;
                if (descriptionElem) descriptionElem.innerHTML = item.description;
                if (categoryElem) categoryElem.innerHTML = item.category;
                if (priceElem) priceElem.innerHTML = item.price;

                container.appendChild(test);
            });
        } else {
            data.forEach((item, index) => {
                const listItem = document.createElement("div");
                listItem.className = "list-item";

                const idElem = document.createElement("span");
                idElem.className = "item-id";
                idElem.textContent = `${index + 1}`;

                const imageElem = document.createElement("img");
                imageElem.className = "item-image";
                imageElem.src = item.image;
                imageElem.style.width = "50px"; // Icon size
                imageElem.style.height = "50px"; // Icon size

                const titleElem = document.createElement("span");
                titleElem.className = "item-title";
                titleElem.textContent = item.title;

                const descriptionElem = document.createElement("span");
                descriptionElem.className = "item-description";
                descriptionElem.textContent = item.description;

                const categoryElem = document.createElement("span");
                categoryElem.className = "item-category";
                categoryElem.textContent = item.category;

                const priceElem = document.createElement("span");
                priceElem.className = "item-price";
                priceElem.textContent = item.price;

                listItem.appendChild(idElem);
                listItem.appendChild(imageElem);
                listItem.appendChild(titleElem);
                listItem.appendChild(descriptionElem);
                listItem.appendChild(categoryElem);
                listItem.appendChild(priceElem);

                container.appendChild(listItem);
            });
        }
    }
});
