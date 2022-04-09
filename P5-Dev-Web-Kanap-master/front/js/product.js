

let id = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + id);


//Pour aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${id}`;


fetch(url).then((response) =>
    response.json().then((product) => {
        console.log(product);
        document.getElementById(`title`).textContent = product.name;
        document.getElementById(`price`).textContent = product.price;
        document.getElementById(`description`).textContent = product.description;
        const image = document.createElement(`img`);
        image.setAttribute(`src`, product.imageUrl);
        image.setAttribute(`alt`, product.altTxt);
        const productColor = document.getElementById(`colors`)

        for (let i = 0; i < product.colors.length; i += 1) {
            const option = document.createElement(`option`);
            option.innerText = product.colors[i];
            option.value = product.colors[i];
            console.log(product.colors[i]);
            productColor.appendChild(option);
        }

        const button = document.getElementById(`addToCart`);

        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            alert(" test");

            //si la couleur n'est pas selectionné
            if(productColor.value ==``) {
                alert("choisissez une couleur");
            }

            const quantityElement = document.getElementById(`quantity`);
            if (quantityElement.value < 1 || quantityElement.value > 100) {
                alert("Nombre d'article() (1-100)");

        }

        });

        const displayimg = document.querySelector(".item__img");
        displayimg.appendChild(image);

    }







));














