//criando fatorial
//4! = 4 x 3 x 2 x 1 = 24

// let fatorial = 4;
// let resultado = fatorial;

// for (let index = 1; index < fatorial; index++) {
//   resultado *= index;
// }

// console.log(resultado);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que
// seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria
// invertida para “ananab”. Utilize a string abaixo como exemplo, depois
//troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = "tryber";
// let wordInvertArray = [];
// for (let index = word.length - 1; index >= 0; index--) {
//   wordInvertArray.push(word[index]);
// }
// let wordInvert = wordInvertArray.join("");
// console.log(wordInvert);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que
//imprima no console a maior palavra desse array e outro que imprima a menor.
//Considere o número de caracteres de cada palavra.

// let array = ["java", "javascript", "python", "html", "css"];

// //maior palavra

// let bigWord = "";
// for (let index = 0; index < array.length; index++) {
//   if (array[index].length > bigWord.length) {
//     bigWord = array[index];
//   }
// }
// console.log(bigWord);

// //menor palavra
// let smallWord = array[0];
// for (let index = 0; index < array.length; index++) {
//   if (array[index].length < smallWord.length) {
//     smallWord = array[index];
//   }
// }
// console.log(smallWord);

//Um número primo é um número inteiro maior do que 1 que possui somente dois
//divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva
//um algoritmo que imprima no console o maior número primo entre 2 e 50.

// let bigPrimeNumber = 0;
// let primeNumbers = [];

// for (let index = 2; index <= 50; index++) {
//   let countPrimeNumbers = 0;
//   for (let index1 = index; index1 > 1; index1--) {
//     if (index % index1 === 0) {
//       countPrimeNumbers += 1;
//     }
//   }
//   if (countPrimeNumbers === 1) {
//     primeNumbers.push(index);
//   }
// }
// bigPrimeNumber = Math.max(...primeNumbers);
// console.log(bigPrimeNumber);
