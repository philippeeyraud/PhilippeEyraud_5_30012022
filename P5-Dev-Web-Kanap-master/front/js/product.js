

let id = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + id);


//Aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${id}`;


fetch (url).then ((response) =>
response.json().then((promise) =>{
id = promise;   
console.log(id);

})
);
const idDisplay= async () => {
    await fetch (+ id);
}