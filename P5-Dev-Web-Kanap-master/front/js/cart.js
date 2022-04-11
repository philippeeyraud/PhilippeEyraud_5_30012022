//enregistrer le panier dans local storage.
function saveCart (cart){
    localStorage .setItem ("cart",JSON.stringify(cart));
}
//on recupere un item
function getCart () {
    let cart = localStorage.getItem("cart");
if (cart == null) {
    return [];
}
else {return JSON.parse(cart);
}
}
//récupérer le panier et ajout au panier
function addCart (product){
let cart = getCart();
//Gérer une quantité, si le produit existe deja on lui ajoute une quantité sinon on l'ajoute
let foundProduct = cart.find(p => p.id = product.id);
if(foundProduct != undefined) {
foundProduct.quantity++;
}else{
    product.quantity = 1
    cart.push(product);
}

saveCart(cart);
}
