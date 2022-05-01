
//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));


for (let productCart of cart) {
    console.log(productCart)
    const id = productCart.id;

    const productColor = productCart.color;
    console.log(productColor)
    const productQuantity = productCart.quantity;
    console.log(productQuantity)
    const url = `http://localhost:3000/api/products/${id}`

    fetch(url).then((response) =>
        response.json().then((productObj) => {

            const article = document.createElement("article");
            document.querySelector("#cart__items").append(article);

            article.className = `cart__item`;
            article.setAttribute('data-id', id);
            article.setAttribute('data_color', id);
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
            p = document.querySelectorAll(`.deleteItem`);

            //supprimer un objet affiché dans le panier

            let deleteItem = document.querySelectorAll(".deleteItem");
            console.log(deleteItem)

            //selection des elements qui peuvent etre supprimés
            for (let i = 0; i <deleteItem.length; i++) {
                deleteItem[i].addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    alert(" supprimer le produit");
console.log(event)
//selection de l'id qui sera supprimé en cliquant sur supprimer
const id_a_supprimer = productObj[i].id;
console.log(id_a_supprimer)







                }








                    /*   function removeFromCart(productObjet) {
                           let cart = getCart()
                           cart = cart.filter(p => p.id != (product.id));
                           saveCart(cart);
                           console.log(productObj)
                       }
                       */


                    /*for (let i = 0; i < p.length; i++) {
                        p[i].addEventListener("click", (event) => {
                             event.preventDefault();
                            event.stopPropagation();
                            alert(" supprimer le produit");
        
        
                        })
                    }
         */

                    //    const cartItemContentSettingsQuantity = document.createElement(`div`);
                    // const inputtype = document.querySelector(`.itemQuantity`);

                    //changer la quantité

                    /*   function changeQuantity(productCart, quantity) {
                           
                           let cart = getCart();
                           let foundProductCart = cart.find(p => p.id == productCart.id);
                           if (foundProductCart != undefined) {
                               foundProductCart.quantity += quantity;
                               //ne pas prendre de quantité négatives
                               if (foundProductCart.quantity <= 0) {
                                   removeFromCart(foundProduct);
                               } else {
                                   saveCart(cart);
                               }
                           }
                           saveCart(cart);
                       }
                     
                      
           
                  /*     function removeFromCart(productCart) {
                           let cart = getCart();
                           cart = cart.filter(p => p.id != productCart.id);
                           saveCart(cart);
                           console.log(removeFromCart)
                       }
           
                       const dileteItems = function () {
                           for (let i = 0; i < deleteItem.; i++) {
                               deleteItem[i].addEventListener("click", function () {
                                   cart = getCart();
           
                               })
                           }
           
                       }
                       /* Affiche le prix total et la quantité de produit dans le panier
                               
                       const totalQuantity = document.getElementById(`totalQuantity`);
                       const totalPrice = document.getElementById(`totalPrice`);
           
           */

























                )
            }
        }))
}
 /*      const cartItem = document.createElement(`div`);
const cartItemContent = document.createElement(`div`);
const cartItemImage = document.createElement(`div`);
const cartItemContentDescription = document.createElement(`div`);
const cartItemContentSettings = document.createElement(`div`);
const cartItemContentSettingsQuantity = document.createElement(`div`);
const cartItemContentSettingsDelete = document.createElement(`div`);
cartItem.appendChild(cartItemContent);
cartItem.appendChild(cartItemImage);
cartItemImage.append(cartItemContent);
cartItemContent.appendChild(cartItemContentDescription);
cartItemContent.appendChild(cartItemContentSettings);
cartItemContentSettings.appendChild(cartItemContentSettingsQuantity);
cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
 
*/
/*  const cart = []
   cart.sort(Array)
   console.log(cart)

   const article = document.createElement(`article`);
   article.setAttribute(`data-id`, productCart.id);
   article.setAttribute(`data-color`, productCart.color);
   const displayarticle = document.querySelector(`.cart__item`)
   displayarticle.append(article);*/
