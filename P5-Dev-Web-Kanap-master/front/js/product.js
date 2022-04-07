

let id = new URL(window.location.href).searchParams.get(`id`);
console.log("le id =" + id);


//Pour aller chercher des requêtes vers l'API 
let url = `http://localhost:3000/api/products/${id}`;


fetch(url).then((response) =>
    response.json().then((product) => {
        console.log(product);
        const { name, price, imageUrl, description, colors } = product;

        document.getElementById(`title`).textContent = name;
        document.getElementById(`price`).textContent = price;
        document.getElementById(`description`).textContent = description;


        const image = document.createElement(`img`);
        image.setAttribute(`src`, imageUrl);
        const alt = document.createElement(`alt`);

        const selectname = document.getElementsByTagName(`color-select`)
        const option = document.createElement(`option`);
        const quantityElmement = document.getElementById(`quantity`);
        const  productColor = document.getElementById(`colors`)
       const color = product.value;
       
       for (let i = 0; i <colors.length; i += 1) {
        option.innerHTML = colors;
          option.value = [colors.i];
          console.log(colors);
         productColor.appendChild(option);



        }

        if (quantityElmement.values < 1 || quantityElmement.value > 100) {
            alert("Nombre d'article() (1-100)");
        }








        // button.addEventListener("click", function (event) {
        //    event.preventDefault();
        //   event.stopPropagation();

        //  if (button == `option.value`) {
        //  alert(" ");
        //    } 








        const displayimg = document.querySelector(".item__img");
        displayimg.appendChild(image);
        image.append(alt);


















    }







    ));














