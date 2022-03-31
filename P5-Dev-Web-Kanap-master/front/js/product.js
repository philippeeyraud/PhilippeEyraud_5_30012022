

let id = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + id);


//Aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${id}`;


fetch(url).then((response) =>
    response.json().then((product) => {


        console.log(product);


        const { name, price, imageUrl, description, alt } = product;

        document.getElementById(`title`).textContent = name;
        document.getElementById(`price`).textContent = price;
        document.getElementById(`description`).textContent = description;


        const image = document.createElement(`img`);
        image.setAttribute(`src`,imageUrl);
       
      
        const displayimg = document.querySelector(".item__img");
        displayimg.appendChild (image);
    }







    ));














