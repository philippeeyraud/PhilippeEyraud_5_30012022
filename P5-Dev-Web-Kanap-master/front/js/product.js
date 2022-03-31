

let id = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + id);


//Aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${id}`;


fetch(url).then((response) =>
    response.json().then((promise) => {
        id = promise;
        console.log(promise);
        const idDisplay = async () => {
            const response = await fetch(url);
            const {name,price, imageUrl, description,alttx} = id
            console.log(imageUrl);
            document.getElementById(`title`).textContent = name;
            document.getElementById(`price`).textContent = price;
            document.getElementById(`description`).textContent = description;
            const image = document.createElement(`img`);
            image.getElementsByTagName(`imgSrc`).document = imageUrl;
            
           
        }
        
idDisplay()


    }

    ));














