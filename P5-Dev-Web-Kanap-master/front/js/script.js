
//Aller chercher des requêtes vers l'API .
let outputData = [];

const fetchOutput = async () => {
   await fetch("http://localhost:3000/api/products/")
      //attendre la  recherche de la requête.   

      //création d'une promise , on traite la réponse avec json.
      .then((Response) => Response.json())
      //traiter la promise et récupérer le tableau   
      .then((Promise) => {
         outputData = Promise
         console.log(outputData)
      }
      )
};
//Avant d'executer la fonction on attend la réponse de fetchOutput.
const outputDisplay = async () => {
   await fetchOutput();
   //on fait une boucle for
   //on va chercher les élément dans le DOM.
   //on cherche la source dans le back-end.
   // for (let v of outputData ) {document.getElementById("items").innerHTML+=`<article><img class="items" src="${v.imageUrl}" alt="image items du site" /></article>`;}

   const items = document.querySelector('#items');
 
   for (let v of outputData) {
      
      let _id = []
       _id[v] = _id.outputData;

      const a = document.createElement(`a`);
      const aHref = document.createAttribute(`href`);
      a.setAttributeNode(aHref);

      const article = document.createElement(`article`);
      const image = document.createElement(`img`);
      const imageSrc = document.createAttribute(`src`);
      imageSrc.value = v.imageUrl;
      image.setAttributeNode(imageSrc);

      const subtitle = document.createElement(`h3`);
      const subtitleClass = document.createAttribute(`class`);
      subtitleClass.value = `Name`;
      const subtitletext = v.name;
      subtitle.setAttributeNode(subtitleClass);

      const paragraphe = document.createElement(`p`);
      const paragrapheClass = document.createAttribute(`class`);
      paragrapheClass.value = `productDescription`
      const paragrapheText = v.description;
      paragraphe.setAttributeNode(paragrapheClass);

      //présentation
      items.appendChild(a);
      a.append(article);
      article.append(image, subtitle, paragraphe);
      paragraphe.append(paragrapheText);
      subtitle.append(subtitletext);
   }
}
//permet d'appeler la fonction
outputDisplay();






