//Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase,
// atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!'
// seja substituído pelo nome passado por parâmetro.
const substituaX = (nome) => {
  const phrase = "Tryber x aqui!";
  const wordList = phrase.split(" ");
  for (let index in wordList) {
    wordList[index] === "x" ? (wordList[index] = nome) : wordList[index];
  }
  return wordList.join(" ");
};

console.log(substituaX("Daniel"));

//Função 2: Escreva uma função que irá receber o retorno da Função 1
//por parâmetro e retornará uma nova string.
//O nome da função deverá ser minhasSkills;
//A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
//Declare dentro da função uma variável com o nome skills, do tipo const;
//A variável skills deverá ser um array contendo três strings com tecnologias
// que você já aprendeu.
//Crie uma varável do tipo let e concatene o valor retornado da Função 1
// - substituaX (utilize template literals), a frase 'Minhas três principais
// habilidades são:' e o valor da variável skills.

const minhasSkills = (phrase) => {
  const skills = ["Javascript", "HTML", "CSS"];
  let habilities = `${phrase}\nMinhas três principais habilidades são:\n - ${skills[0]}\n - ${skills[1]}\n - ${skills[2]}`;
  return habilities;
};

console.log(minhasSkills(substituaX("Daniel")));
