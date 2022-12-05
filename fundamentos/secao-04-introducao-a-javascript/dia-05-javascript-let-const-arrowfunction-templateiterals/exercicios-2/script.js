// Crie uma função que ligue e desligue um motor de um carro.
// Crie uma variável para armazenar o valor de status do seu motor
//(lembre-se de armazenar o tipo de variável da forma correta);
// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá
// nenhum parâmetro;
// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma
// condicional para ligar e desligar o motor);
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“
//(lembre-se de utilizar o template literals nesse momento).
// Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.
let status = "ligado";
const ligaDesligaMotor = () =>
  status === "ligado" ? (status = "desligado") : (status = "ligado");
console.log(`O motor está ${ligaDesligaMotor()}`);
console.log(`O motor está ${ligaDesligaMotor()}`);
console.log(`O motor está ${ligaDesligaMotor()}`);

//Crie uma função que calcule a área de um círculo.
//Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
//Com base nessa informação:

//-Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

//-Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

//-Crie a lógica para retornar a área do círculo;

//-Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

// Exemplo de retorno:
//   Parâmetro: 3
//   Retorno: Essa é a área do círculo: 28.259999999999998
//   Parâmetro: 5
//   Retorno: Essa é a área do círculo: 78.5
const circleArea = (radius) => (Math.PI * (radius * radius)).toFixed(2);
console.log(`Essa é a área do círculo: ${circleArea(3)}`);
console.log(`Essa é a área do císculo: ${circleArea(5)}`);

//Crie uma função que receba uma frase como parâmetro e retorne a maior
// palavra da frase.
const bigWord = (phrase) => {
  const wordList = phrase.split(" ");
  let wordListLength = [];
  for (const word of wordList) {
    wordListLength.push(word.length + " " + word);
  }
  let wordListSort = wordListLength.sort();
  return wordListSort[wordListSort.length - 1].split(" ")[1];
};

let phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(bigWord(phrase));

//outra forma
const longestWord = (text) =>
  text.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(
  longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu")
);
