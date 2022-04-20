
//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));
for (let v of cart) {
    const id = v.id;
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
            const title = document.createElement(`h2`);
            const titleClass = document.createAttribute(`class`);
            titleClass.value = `name`;

            const titletext = productObj.name;
            title.append(titletext);
            console.log(title)
            cartItem.appendChild(cartItemContentDescription)
            displayh2.appendChild(title);






        }));


}
