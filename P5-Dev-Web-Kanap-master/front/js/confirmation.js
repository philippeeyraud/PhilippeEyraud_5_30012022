
//Aller chercher, l'ID passe en parametre.

const id = new URL(window.location.href).searchParams.get('id');
console.log(id);

const orderId = document.getElementById('orderId');



let p = document.querySelector('p')
let span = document.querySelector('span')
if (id === 'undefined') {
        p.innerText = 'Erreur lors de la commande';
        setTimeout('window.location="cart.html"', 6000)

} else {
        orderId.innerText = id;
        p.innerText = 'Commande validée !';
       
        p.append(span)
 

        };

        localStorage.clear();


