// let n = 5;
// let caractere = "*";
// let inputLine = "";

//quadrado
//largura = altura
// for (let index = 0; index < n; index++) {
//   console.log(caractere.repeat(n));
// }

// for (index = 0; index < n; index += 1) {
//   inputLine += caractere;
// }
// for (index = 0; index < n; index += 1) {
//   console.log(inputLine);
// }

//triangulo
// for (let index = 1; index <= n; index += 1) {
//   console.log(caractere.repeat(index));
// }

// for (let index = 0; index < n; index += 1) {
//   inputLine = inputLine + caractere;
//   console.log(inputLine);
// }

//triangulo retangulo
// let n = 5;
// let caractere = "*";
// let inputLine = "";
// let inputPosition = n - 1;

// for (let indexLine = 0; indexLine < n; indexLine++) {
//   for (let indexCol = 0; indexCol < n; indexCol++) {
//     if (indexCol < inputPosition) {
//       inputLine += " ";
//     } else {
//       inputLine += caractere;
//     }
//   }
//   console.log(inputLine);
//   inputLine = "";
//   inputPosition -= 1;
// }

//piramide

// let n = 5;
// let symbol = "*";
// let inputLine = "";
// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + " ";
//     }
//   }
//   console.log(inputLine);
//   inputLine = "";
//   controlRight += 1;
//   controlLeft -= 1;
// }

//Pirâmide com n asteriscos de base que seja vazia no meio.
//Assuma que o valor de n será sempre ímpar
// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = "*";
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = "";
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += " ";
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }
