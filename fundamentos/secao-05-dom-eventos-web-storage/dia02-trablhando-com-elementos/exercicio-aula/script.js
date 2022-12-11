// arquivo script.js

const ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");

ondeVoceEsta.parentElement.style.backgroundColor = "red";

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "texto adicionado com sucesso";

//acessando primeiroFilhodoFilho através de pai
const pai = document.getElementById("pai");
pai.childNodes[3].firstElementChild;
//Acesse o primeiroFilho a partir de pai.
pai.firstElementChild;
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
ondeVoceEsta.firstElementChild;
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
ondeVoceEsta.nextSibling;
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
ondeVoceEsta.nextElementSibling;
//Agora acesse o terceiroFilho a partir de pai.
pai.lastElementChild.previousElementSibling;

//create a brother to elementoOndeVoceEsta
let brotherOndeVcEsta = document.createElement("section");
brotherOndeVcEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(brotherOndeVcEsta);
//create a children to elementOndeVoceEsta
let childrenOndeVcEsta = document.createElement("section");
childrenOndeVcEsta.id = "filhoElementoOndeVoceEsta";
ondeVoceEsta.appendChild(childrenOndeVcEsta);

//create a children primeiroFilhoDoFilho
const childrenPrimeiroFilhoDoFilho = document.createElement("section");
childrenPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(childrenPrimeiroFilhoDoFilho);

//acesse o terceiro filho a partir do elemento criado anteriormente
const filhoPrimeiroFilhoDoFilho = document.getElementById(
  "filhoPrimeiroFilhoDoFilho"
);
console.log(
  filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling
);
