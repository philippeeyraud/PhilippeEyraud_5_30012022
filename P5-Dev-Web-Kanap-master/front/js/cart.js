const sectionArticle = document.getElementById("cart_items");
const totalQuantity = document.getElementById(`totalQuantity`);
const totalPrice = document.getElementById(`totalPrice`);
const deleteItem =document.getElementsByClassName(`.deleteItem`)
const productQuantity = document.querySelectorAll(`.itemQuantity`)
//enregistrer le panier dans local storage.
function saveCart (cart){
    localStorage.setItem ("cart",JSON.stringify(cart));
}
//on recupere le contenu du panier
function getCart () {
    let cart = localStorage.getItem("cart");
if (cart == null) {
    return [];
}
else {return JSON.parse(cart);
}
}
//et ajout au panier
function addCart (product){
let cart = getCart();
//Gérer une quantité, si le produit existe deja on lui ajoute une quantité sinon on ajoute le produit.
let foundProduct = cart.find(p => p.id = product.id);
if(foundProduct != undefined) {
foundProduct.quantity++;
}else{
    product.quantity = 1
    cart.push(product);
}

saveCart(cart);
}
//retirer un produit du panier

function removeFronCart(product){
    let cart = getCart();
    cart = cart.filter(p => p.id != product.id);
    saveCart(cart);
}

//changer la quantité
function ChangeQuantity(product,quantity){
    let cart =getCart();
    let foundProduct = cart.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        //ne pas prendre de quantité négatives
        if(foundProduct.quantity <= 0 )  {
            removeFromBasket(foundProduct);
        }  else {
            saveCart(cart);
        }
    }
    saveCart(cart);
}


//fonction de récupération du prix deepuis le serveur.
//function getPrice(id,product) {
//const result = product.filter((element)=> element._id == id);
//if(result) {
 //   for (let result of result) {return Response.price;}
//}

