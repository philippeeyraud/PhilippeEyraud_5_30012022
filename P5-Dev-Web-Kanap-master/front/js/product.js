

let productId = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + productId);


//Pour aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${productId}`;





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
        const displayimg = document.querySelector(".item__img");
        displayimg.appendChild(image);


        const button = document.getElementById(`addToCart`);
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            alert(" test");

            //si la couleur n'est pas selectionné
            if (productColor.value == ``) {
                alert("choisissez une couleur");
            }

            const quantityElement = document.getElementById(`quantity`);
            if (quantityElement.value < 1 || quantityElement.value > 100) {
                alert("Nombre d'article() (1-100)");
            }

        });
        const getCard = () => {
            const product = {
                id: productId,
                color: productColor.value.value,
                quantity: quantityElement.value,
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.imageUrl,
                altTxt: product.altTxt,
            };
        
            //on recupere un item
             function getCart() {
            let cart = localStorage.getItem("cart");
            if (cart == null) {
                return [];
            }
            else {
                return JSON.parse(cart);
            }
             }
            //récupérer le panier et ajout au panier
             function addCart(product) {
            let cart = getCart();
            //Gérer une quantité, si le produit existe deja on lui ajoute une quantité sinon on l'ajoute
            let foundProduct = cart.find(p => p.id = product.id);
            if (foundProduct != undefined) {
                foundProduct.quantity++;
            } else {
                product.quantity = 1
                cart.push(product);
            }

            saveCart(cart);
            }

        }















    }







    ));














