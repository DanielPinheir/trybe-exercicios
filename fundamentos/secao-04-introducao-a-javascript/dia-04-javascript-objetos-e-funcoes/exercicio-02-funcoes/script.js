//palindromo
// function palindromo(word) {
//   let invertedWord = word.split("").reverse().join("");
//   if (invertedWord === word) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromo("desenvolvimento"));

//bigIndex
// function bigIndex(array) {
//   return array.indexOf(Math.max(...array));
// }
// let array = [2, 3, 6, 7, 10, 1];
// console.log(bigIndex(array));

//smallIndex
// function smallIndex(array) {
//   return array.indexOf(Math.min(...array));
// }
// let newArray = [2, 4, 6, 7, 10, 0, -3];
// console.log(smallIndex(newArray));

//funcao com maior nome em uma lista
// function bigSizeName(listNames) {
//   let sizeNames = [];
//   for (let name of listNames) {
//     sizeNames.push(name.length);
//   }
//   let positionBigSizeName = sizeNames.indexOf(Math.max(...sizeNames));
//   return listNames[positionBigSizeName];
// }
// let listNames = [
//   "José",
//   "Lucas",
//   "Nádia",
//   "Fernanda",
//   "Cairo",
//   "Alessandro",
//   "Joana",
// ];
// console.log(bigSizeName(listNames));

//Funcao com elemento que mais se repete
//Array de teste: [2, 3, 2, 5, 8, 2, 3];
// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;

//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }

//   return numeros[indexNumeroRepetido];
// }

// function maisRepetido(numeros) {
//   let num = {};

//   for (let index = 0; index < numeros.length; index += 1) {
//     let valor = numeros[index];
//     if (num[valor] === undefined) {
//       num[valor] = 1;
//     } else {
//       num[valor] = num[valor] + 1;
//     }
//   }

//   let contRepetido = 0;
//   let contNumero = 0;

//   for (let prop in num) {
//     if (contRepetido < num[prop]) {
//       contRepetido = num[prop];
//       contNumero = prop;
//     }
//   }

//   return contNumero;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2
// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

//Função que receba um número natural (número inteiro não negativo) N
//e retorne o somatório de todos os números de 1 até N.
// function sumNumbersAfter(number) {
//   let sumNumbers = 0;
//   for (let index = 0; index <= number; index += 1) {
//     sumNumbers += index;
//   }
//   return sumNumbers;
// }
// console.log(sumNumbersAfter(5));

//Função que receba uma string word e outra string ending.
//Verifique se a string ending é o final da string word.
//Considere que a string ending sempre será menor que a string word.
// function stringEndValidation(stringWord, stringEnding) {
//   return stringWord.split(stringEnding)[1] === "" ? `true` : "false";
// }
// console.log(stringEndValidation("joaofernando", "fernan"));
