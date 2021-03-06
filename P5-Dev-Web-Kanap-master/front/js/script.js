
//Aller chercher des requêtes vers l'API .
let outputData = [];

const fetchOutput = async () => {
   //attendre la  recherche de la requête.  
   await fetch("http://localhost:3000/api/products/")


      //création d'une promise , on traite la réponse avec json.
      .then((Response) => Response.json())
      //traiter la promise et récupérer le tableau   
      .then((Promise) => {
         outputData = Promise
       
      }
      )
};
//Avant d'executer la fonction on attend la réponse de fetchOutput.
const outputDisplay = async () => {
   await fetchOutput();
   //on fait une boucle for
   //on va chercher les élément dans le DOM.

   for (let v of outputData) {
      const a = document.createElement(`a`);
      a.setAttribute(`href`, "product.html?id=" + v._id);
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
      paragrapheClass.value = `productDescription`;
      const paragrapheText = v.description;
      paragraphe.setAttributeNode(paragrapheClass);


      //création de la node list pour l'affichage des produits
      items.appendChild(a);
      a.append(article);
      article.append(image, subtitle, paragraphe);
      paragraphe.append(paragrapheText);
      subtitle.append(subtitletext);


   }

}
//permet d'appeler la fonction
outputDisplay();
