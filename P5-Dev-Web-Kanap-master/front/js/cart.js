
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
            image.setAttribute(`src`, cart.imageUrl);
            image.setAttribute(`alt`, cart.altTxt);
        
           

            const displayimg = document.querySelector(".cart__item__img");
            displayimg.appendChild(image);








        }));
     

}
