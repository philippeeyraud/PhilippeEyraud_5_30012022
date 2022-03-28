

let id = new URL(window.location.href).searchParams.get(`id`);
console.log("mon id =" + id);


//Aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926`;


fetch (url).then ((response) =>
response.json().then((data) =>{
console.log(data);
})
);
