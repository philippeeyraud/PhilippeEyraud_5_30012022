
//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));


for (let productCart of cart) {
    const id = productCart.id;
    const productColor = productCart.color;
    const productQuantity = productCart.quantity;
    const url = `http://localhost:3000/api/products/${id}`

    fetch(url).then((response) =>
        response.json().then((productObj) => {
            console.log(productObj);

            const image = document.createElement(`img`);
            image.setAttribute(`src`, productObj.imageUrl);
            image.setAttribute(`alt`, productObj.altTxt);
            const displayimg = document.querySelector(".cart__item__img");
            displayimg.appendChild(image);

            const cartItem = document.createElement(`div`);
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


            const displayp = document.querySelector(`.cart__item__content__description`);
            const title = document.createElement(`h2`);
            const titleClass = document.createAttribute(`class`);
            titleClass.value = `name`;
            const color = document.createElement(`p`);
            const colorClass = document.createAttribute(`class`);
            colorClass.value = `colors`;
            color.append(productColor);
            console.log(color)
            displayp.appendChild(color)
            const titletext = productObj.name;
            title.append(titletext);
            console.log(title)
            displayp.appendChild(title);

            const price = document.createElement(`p`);
            const priceClass = document.createAttribute(`class`);
            priceClass.value = `price`;
            const productPrice = productObj.price;
            const pricetext = "  €";
            price.append(productPrice);
            price.append(pricetext);
            displayp.appendChild(price);

            const quantity = document.createElement(`p`);
            const quantityClass = document.createAttribute(`class`);
            quantityClass.value = `quantity`;
            const quantitytext = "Qte :";
            quantity.append(quantitytext);
            quantity.append(productQuantity);
            displayp.append(quantity);
            console.log(quantity);

            /*  for (let i = 0; i <deleteItem.lenght; i++)
               deleteItem[i].addEventListener("click", function () {
                   cart = getCart();
           */
            const displayd = document.querySelector(`.cart__item__content__settings__delete`);
            const deleteItem = document.createElement(`p`);
            const deleteItemtext = "supprimer";
            deleteItem.append(deleteItemtext);
            displayd.append(deleteItem);

            for (let i = 0; i <deleteItem.lenght; i++)
            deleteItem[i].addEventListener("click", function () {
                cart = getCart();
            });

        }));

}
