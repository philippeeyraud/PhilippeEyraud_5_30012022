//Récupérer les données du localstorage
let cart = JSON.parse(localStorage.getItem("cart"));



//
// Retourne les données d'un produit depuis le back end
//
async function getProductObjFromBack(productId) {
    const url = `http://localhost:3000/api/products/${productId}`

    return new Promise((resolve, reject) => {
        fetch(url).then((response) =>
            response.json().then((productObj) => {
                resolve(productObj)
            })).catch(err => { reject(err) })


    });
}

//
// Calcule le prix global
//
async function getTotalProduct() {

    let totalQuantity = 0;
    let totalPrice = 0;


    //Affiche le prix total et la quantité de produit dans le panier


    //    console.log(cart);    
    for (let product of cart) {
        productObj = await getProductObjFromBack(product.id);
        totalQuantity += parseInt(product.quantity);
        totalPrice += parseInt(product.quantity) * parseFloat(productObj.price);

    }
    document.getElementById('totalQuantity').textContent = totalQuantity;
    document.getElementById('totalPrice').textContent = totalPrice;


}

// 
// afficher les produits du localstorage
//
async function showProducts() {
    for (let productCart of cart) {
        const id = productCart.id;
        const productColor = productCart.color;
        const productQuantity = productCart.quantity;

        productObj = await getProductObjFromBack(productCart.id);

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
        priceClass.value = parseInt(`price`);
        const productPrice = productObj.price;
        const pricetext = "  €";
        console.log(productPrice)

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


        // GESTION DES EVENTS
        //supprimer un objet affiche dans le panier
        deleteProduct.addEventListener("click", (event) => {
            event.preventDefault();
            eraseProduct(event.target);

        })

        //Récupérer les valeur dans l'inputitemquantity
        input_quantity.addEventListener("change", (event) => {
            changeQuantity(event.target);
        })
    }

}

//
// changement de quantité
//
function changeQuantity(target) {
    //event.target correspond au  clique sur input.ItemQuantity

    const newQuantity = target.value;
    alert("la quantité a été modifiée = " + newQuantity);

    //Récupérons l'id et la couleur
    const article = target.closest(`article`);
    const art_id = article.getAttribute('data-id');
    const art_color = article.getAttribute(`data-color`);
    console.log(`art_id= ${art_id} - art_color =${art_color}`);
    // parcours du cart et changement de la valeur
    for (let product of cart) {
        // console.log(`product ${product.id}`);
        if (product.id == art_id && product.color == art_color) {
            product.quantity = newQuantity;
        }
    }
    //console.log(cart);
    //envoyer la nouvelle quantité dans le local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    getTotalProduct();
}



// suppression d'un produit

function eraseProduct(target) {
    alert(" supprimer le produit");

    //selection de l'id qui sera supprime en cliquant sur supprimer
    //event.target correspond au deleteproduct clique

    //Je vais chercher l article parent grace a closest
    const article = target.closest(`article`);
    //Récupérons l'id et la couleur
    const art_id = article.getAttribute('data-id');
    const art_color = article.getAttribute(`data-color`);

    //filtrer le produit à supprimer dans le local storage 
    function notToSuppress(product) {
        return (product.id != art_id && product.color != art_color);
    }
    cart = cart.filter(notToSuppress);

    localStorage.setItem("cart", JSON.stringify(cart));
    // effacer l'article dans le DOM                   
    article.remove();

    //Signaler la suppression de l objet
    alert("ce produit a été supprimé");

    //récupérer la zone de saisie;
    getTotalProduct();
}


const surfaceControl = function () {

    //Récupérer les informations du formulaire



    const form = document.querySelector(`.cart__order__form`);

    const command = document.querySelector("order");
    //Récupérer les données du formulaire creéer une node list
    let email = document.querySelector('#email');
    let lastName = document.querySelector('#lastName');
    let firstName = document.querySelector('#firstName');
    let address = document.querySelector('#address');
    let city = document.querySelector('#city');

    //Ecouter la modification de l Email
    form.email.addEventListener(`change`, function () {
        {
            validEmail(this)
        }
    })

    //Ecouter la modification de text
    form.firstName.addEventListener(`change`, function () {
        {
            validFirstName(this)

        }
    })
    form.lastName.addEventListener(`change`, function () {
        {
            validLastName(this)

        }
    })
    form.address.addEventListener(`change`, function () {
        {
            validAddress(this)

        }
    })
    form.city.addEventListener(`change`, function () {
        {
            validCity(this)

        }
    })
}
//Créer la fonction validFirstName
const validFirstName = function (inputFirstName) {
    // création de la REgExp pour validation FirstName
    firstNameRegExp = new RegExp('^[a-zA-Z-]{2,15}$', 'g');
    //Informer l'utilisateur si il a mal rempli le message
    let testFirstName = firstNameRegExp.test(inputFirstName.value);
    let mes = document.createElement('p');
    mes = document.getElementById('firstNameErrorMsg');

    if (testFirstName) {
        mes.insertAdjacentHTML('beforeend', "");
    }
    else {
        mes.insertAdjacentHTML('beforeend', " text error !");
    }
    console.log(validFirstName)
}

//Créer la fonction validLastName
const validLastName = function (inputLastName) {
    // création de la REgExp pour validation FirstName
    lastNameRegExp = new RegExp('^[a-zA-Z-]{2,15}$', 'g');
    //Informer l'utilisateur si il a mal rempli le message
    let testLastName = lastNameRegExp.test(inputLastName.value);
    let mes = document.createElement('p');
    mes = document.getElementById('lastNameErrorMsg');
    if (testLastName) {
        mes.insertAdjacentHTML('beforeend', " ");
    }
    else {
        mes.insertAdjacentHTML('beforeend', "  text error !");
    };
    console.log(mes)
}


//Créer la fonction validAddress
const validAddress = function (inputAddress) {
    // création de la REgExp pour validation FirstName
    addressRegExp = new RegExp('^[a-zA-Z0-10000-,]{2,15}$', 'g');
    //Informer l'utilisateur si il a mal rempli le message
    let testAddress = addressRegExp.test(inputAddress.value);
    let mes = document.createElement('p');
    mes = document.getElementById('addressErrorMsg');

    if (testAddress) {
        mes.insertAdjacentHTML('beforeend', "");
    }
    else {
        mes.insertAdjacentHTML('beforeend', " text error !");
    }
    console.log(validAddress)
}
//Créer la fonction validCity
const validCity = function (inputCity) {
    // création de la REgExp pour validation FirstName
    cityRegExp = new RegExp('^[a-zA-Z-.,]{2,15}$', 'g');
    //Informer l'utilisateur si il a mal rempli le message
    let testCity = cityRegExp.test(inputCity.value);

    let mes = document.getElementById('cityErrorMsg');
    if (testCity) {
        mes.insertAdjacentHTML('beforeend', "");
    }
    else {
        mes.insertAdjacentHTML('beforeend', " text error !");
    }
    console.log(validCity)

}
//Créer la fonction validEmail
const validEmail = function (inputEmail) {
    // création de la REgExp pour validation email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    //Informer l'utilisateur si il a mal rempli le message
    let testEmail = emailRegExp.test(inputEmail.value);

    let mes = document.getElementById('emailErrorMsg');

    if (testEmail) {
        mes.insertAdjacentHTML('beforeend', " ");
    }
    else {
        mes.insertAdjacentHTML('beforeend', " email error !");
    };
    console.log(mes)
}
/* MAIN */
async function main() {
    try {
        console.log("MAIN");

        await showProducts();
        await getTotalProduct();
        await surfaceControl();
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('finally')
    }

}

main();
