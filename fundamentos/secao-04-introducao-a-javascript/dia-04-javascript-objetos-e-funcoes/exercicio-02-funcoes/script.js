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

//funcao com elemento que mais se repete
