
//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));

for (let productObj of cart) {
    const id = productObj.id;
    const productColor = productObj.color;
    const productQuantity = productObj.quantity;
    const url = `http://localhost:3000/api/products/${id}`

    fetch(url).then((response) =>
        response.json().then((productObj) => {
            console.log(productObj);

            const section = document.getElementById(`cart_items`);
            const article = document.getElementsByClassName(`cart__item`)

            const image = document.createElement(`img`);
            image.setAttribute(`src`, productObj.imageUrl);
            image.setAttribute(`alt`, productObj.altTxt);

            const displayimg = document.querySelector(".cart__item__img");
            displayimg.appendChild(image);

            const cartItem = document.createElement(`div`);
            const cartItemContentDescription = document.createElement(`div`);
            const displayh2 = document.querySelector(`.cart__item__content__description`)
            const displayp = document.querySelector(`.cart__item__content__description`)
            const title = document.createElement(`h2`);
            const titleClass = document.createAttribute(`class`);
            titleClass.value = `name`;
            const color = document.createElement(`p`);
            const colorClass = document.createAttribute(`class`);
            colorClass.value = `colors`;
            const titletext = productObj.name;
            title.append(titletext);
            console.log(title)
            color.append(productColor);
            console.log(color)
            cartItem.appendChild(cartItemContentDescription)
            displayh2.appendChild(title);
            displayp.appendChild(color)
            const price = document.createElement(`p`);
            const priceClass = document.createAttribute(`class`);
            priceClass.value = `price`;
            const productPrice = productObj.price;
            price.append(productPrice);
            displayp.appendChild(price);
            const quantity = document.createElement(`p`);
            const quantityClass = document.createAttribute(`class`);
            quantityClass.value = `quantity`;
            quantity.append(productQuantity);
            displayp.appendChild(quantity);
           console.log(quantity)



        }));


}
