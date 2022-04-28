
//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));


for (let productCart of cart) {

    const id = productCart.id;
    console.log(id)
    const productColor = productCart.color;
    console.log(productColor)
    const productQuantity = productCart.quantity;
    console.log(productQuantity)
    const url = `http://localhost:3000/api/products/${id}`

    fetch(url).then((response) =>
        response.json().then((productObj) => {
            console.log(productObj)
            const article = document.createElement("article");
            document.querySelector("#cart__items").append(article);

            article.className = `cart__item`;
            article.setAttribute('data-id', id);
            article.setAttribute('data_color', id);
            const article_div = article.appendChild(document.createElement(`div`));
            article_div.setAttribute(`class`, `cart__item__img`);
           
            const title = document.createElement(`h2`);
            const titleClass = document.createAttribute(`class`);
            titleClass.value = `name`;
            const titletext = productObj.name;
            title.append(titletext);
            article_div.appendChild(title);
            const image = document.createElement(`img`);
            image.setAttribute(`src`, productObj.imageUrl);
            image.setAttribute(`alt`, productObj.altTxt);

            // const displayimg = document.querySelector(`.cart__item__img`);
            article_div.appendChild(image)
          
           
            
     
            const color = document.createElement(`p`);
            const colorClass = document.createAttribute(`class`);
            colorClass.value = `colors`;
            color.append(productColor);
            article_div.append(color); 
         

           
       
            const price = document.createElement(`p`);
            const priceClass = document.createAttribute(`class`);
            priceClass.value = `price`;
            const productPrice = productObj.price;
            const pricetext = "  €";
            price.append(productPrice);
            price.append(pricetext);
            article_div.append(price); 
     

            const cartItemContentSettingsQuantity = document.createElement(`div`);
            const inputtype = document.querySelector(`.itemQuantity`);

            const quantity = document.createElement(`p`);
            const quantityClass = document.createAttribute(`class`);
            quantityClass.value = `quantity`;
            const quantitytext = "Qte :";
            cartItemContentSettingsQuantity.append(inputtype);
            quantity.append(quantitytext);
            quantity.append(productQuantity);
            article_div.append(quantity);
    



            //changer la quantité

            function changeQuantity(productCart, quantity) {

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
            //supprimer un objet affiché dans le panier
            const displayd = document.querySelector(`.cart__item__content__settings__delete`);
            const deleteItem = document.createElement(`p`);
            const deleteItemClass = document.createAttribute(`class`);
            deleteItemClass.value = `deleteItem`;
            const deleteItemtext = "delete";
            deleteItem.append(deleteItemtext);
            displayd.append(deleteItem);
            article_div.append(deleteItem);

            function removeFromCart(productCart) {
                let cart = getCart();
                cart = cart.filter(p => p.id != productCart.id);
                saveCart(cart);
                console.log(removeFromCart)
            }

            const dileteItems = function () {
                for (let i = 0; i < deleteItem.clientHeight; i++) {
                    deleteItem[i].addEventListener("click", function () {
                        cart = getCart();

                    })
                }

            }
            /* Affiche le prix total et la quantité de produit dans le panier
                      */
            const totalQuantity = document.getElementById(`totalQuantity`);
            const totalPrice = document.getElementById(`totalPrice`);













        }












        ))
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
