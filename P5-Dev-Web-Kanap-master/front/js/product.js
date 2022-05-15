

let productId = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + productId);


//Pour aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${productId}`;



//faire les requêtes vers l'API 

fetch(url).then((response) =>
    response.json().then((product) => {

        document.getElementById(`title`).textContent = product.name;
        document.getElementById(`price`).textContent = product.price;
        document.getElementById(`description`).textContent = product.description;
        const image = document.createElement(`img`);
        image.setAttribute(`src`, product.imageUrl);
        image.setAttribute(`alt`, product.altTxt);
        console.log(image)
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
            alert(" ajouter au panier");

            //si la couleur n'est pas selectionné
            if (productColor.value == ``) {
                alert("choisissez une couleur");
                return;

            }

            const quantityElement = document.getElementById(`quantity`);
            if (quantityElement.value < 1 || quantityElement.value > 100) {
                alert("Nombre d'article() (1-100)");
                return;
            }


            else {
                (productId);
            }
            //Stocker les données dans le localstorage
            function saveCart(cart) {
                localStorage.setItem("cart", JSON.stringify(cart));
            }

            //Récuperer les données du panier dans le local storage
            //Création du panierà partir de cette fonction
            function getCart() {
                let cart = localStorage.getItem("cart");
                if (cart == null) {
                    return [];
                }
                else {
                    return JSON.parse(cart);
                }  
            }
            //  ajout au panier , c'est ce produit(productCart)que je veux ajouter au panier
            function addCart(productCart) {
                let cart = getCart();   
                //on récupère l'Id et la couleur

                let foundProduct = cart.find(p => p.id == productCart.id && p.color == productCart.color);

                if (foundProduct != undefined) {
                    //Gérer une quantité, si le produit existe  on lui ajoute une quantité sous forme de nombre.
                    //parseInt analyse une chaine de caractères et renvoie un nombre.  
                    //la quantité est recalculé à chaque ajout de produit
                    let newQuantity = parseInt(foundProduct.quantity) + parseInt(productCart.quantity);
                     foundProduct.quantity = newQuantity;

                } else {

                    cart.push(productCart);
                }

                saveCart(cart);
            }
            //product Cart objet  qui permet de recupérer les éléments suivant, pour pouvoir les envoyer sur le localstorage.

            let productCartObj = {
                id: productId,
                quantity: quantityElement.value,
                color: productColor.value,


            };

            addCart(productCartObj);

        });








    }













    ));














