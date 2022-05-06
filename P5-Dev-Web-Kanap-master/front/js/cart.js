
//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));
//calculer la quantité de produit dans le panier
function getTotalProduct() {
    let number = 0;
    let price = 0;

    //Affiche le prix total et la quantité de produit dans le panier

    const totalQuantity = document.getElementById(`totalQuantity`);
    const totalPrice = document.getElementById(`totalPrice`);

    for (let product of cart) {
       number += product.quantity;
       price += product.price;
        
        console.log(number);

    }

    alert(number);

}


//appel calcul total lors d e l affichage
getTotalProduct();


for (let productCart of cart) {

    const id = productCart.id;

    const productColor = productCart.color;

    const productQuantity = productCart.quantity;

    const url = `http://localhost:3000/api/products/${id}`

    fetch(url).then((response) =>
        response.json().then((productObj) => {

            const article = document.createElement("article");
            document.querySelector("#cart__items").append(article);
            article.className = `cart__item`;
            article.setAttribute('data-id', id);
            article.setAttribute('data-color', productColor);
            // création div img
            const item_img_div = article.appendChild(document.createElement(`div`));
            item_img_div.setAttribute(`class`, `cart__item__img`);
            const image = document.createElement(`img`);
            image.setAttribute(`src`, productObj.imageUrl);
            image.setAttribute(`alt`, productObj.altTxt);
            item_img_div.appendChild(image);

            const item_content_div = article.appendChild(document.createElement(`div`));
            item_content_div.setAttribute(`class`, `cart__item__content`);
            const item_content_desc_div = item_content_div.appendChild(document.createElement(`div`));
            item_content_desc_div.setAttribute(`class`, `cart__item__content__description`);

            const title = document.createElement(`h2`);
            const titleClass = document.createAttribute(`class`);
            titleClass.value = `name`;
            const titletext = productObj.name;
            title.append(titletext);
            item_content_desc_div.appendChild(title);


            const color = document.createElement(`p`);
            const colorClass = document.createAttribute(`class`);
            colorClass.value = `colors`;
            color.append(productColor);
            item_content_desc_div.append(color);

            const price = document.createElement(`p`);
            const priceClass = document.createAttribute(`class`);
            priceClass.value = `price`;
            const productPrice = productObj.price;
            const pricetext = "  €";
            price.append(productPrice);
            price.append(pricetext);
            item_content_desc_div.append(price);

            const item_content_settings_div = item_content_div.appendChild(document.createElement(`div`));
            item_content_settings_div.setAttribute(`class`, `cart__item__content__settings`);

            const item_content_settings_quantity_div = item_content_settings_div.appendChild(document.createElement(`div`));
            item_content_settings_quantity_div.setAttribute(`class`, `cart__item__content__settings__quantity`);

            const quantity = document.createElement(`p`);
            const quantitytext = "Qte :";
            quantity.append(quantitytext);
            item_content_settings_quantity_div.append(quantity);
            const input_quantity = document.createElement(`input`);
            input_quantity.className = `itemQuantity`;
            input_quantity.setAttribute(`name`, `itemQuantity`);
            input_quantity.setAttribute(`min`, `1`);
            input_quantity.setAttribute(`max`, `100`);
            input_quantity.setAttribute(`type`, `number`);
            input_quantity.value = productQuantity;
            item_content_settings_quantity_div.append(input_quantity);

            //afficher l'item supprimer
            const deleteProduct = document.createElement(`p`);
            const deleteProducttext = "supprimer le produit";
            deleteProduct.className = `deleteItem`;
            deleteProduct.append(deleteProducttext);
            const item_content_settings_delete_div = item_content_settings_div.appendChild(document.createElement(`div`));
            item_content_settings_delete_div.setAttribute(`class`, `cart__item__content__settings__delete`);
            item_content_settings_delete_div.append(deleteProduct);


            //supprimer un objet affiche dans le panier
            //selection des elements qui peuvent etre supprimes

            deleteProduct.addEventListener("click", (event) => {
                event.preventDefault()
                alert(" supprimer le produit");

                //selection de l'id qui sera supprime en cliquant sur supprimer
                //event.target correspond au deleteproduct clique
                var target = event.target
                //Je vais chercher l article parent grace a closest
                const article = target.closest(`article`);

                //Récupérons l'id et la couleur
                art_id = article.getAttribute('data-id');
                art_color = article.getAttribute(`data-color`);

                //filtrer le produit à supprimer dans le local storage 
                function notToSuppress(product) {
                    return (product.id != art_id && product.color != art_color);
                }
                cart = cart.filter(notToSuppress);

                localStorage.setItem("cart", JSON.stringify(cart));
                // effacer l'article dans le DOM                   
                article.remove();

                //Signaler la suppression de l objet
                alert("ce panier a été supprimé");

                //récupérer la zone de saisie;
                getTotalProduct();
            })

            //Récupérer les valeur dans l'inputitemquantity
            input_quantity.addEventListener("change", (event) => {
                //event.target correspond au  clique sur input.ItemQuantity
                var target = event.target
                const newQuantity = target.value;
                alert("la quantité a été modifiée = " + newQuantity);
                //Je vais chercher l'input parent grace a closest
                input_type = target.closest(`input.itemQuantity`);
                //Récupérons l'id et la couleur
                art_id = article.getAttribute('data-id');
                art_color = article.getAttribute(`data-color`);
                console.log(`art_id= ${art_id} - art_color =${art_color}`);
                // parcours du cart et changement de la valeur
                for (let product of cart) {
                    console.log(`product ${product.id}`);
                    if (product.id == art_id && product.color == art_color) {
                        product.quantity = newQuantity;
                    }
                }
                console.log(cart);
                //envoyer la nouvelle quantité dans le local storage
                localStorage.setItem("cart", JSON.stringify(cart));
                getTotalProduct();






            })
        }))


}
