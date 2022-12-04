//exercicio1
// const numerosRomanos = {
//   i: 1,
//   v: 5,
//   x: 10,
//   l: 50,
//   c: 100,
//   d: 500,
//   m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];

//   for (let i = 2; i <= len; i += 1) {
//     const prox = numerosRomanos[numero[len - i]];

//     if (atual <= prox) {
//       soma += prox;
//     } else {
//       soma -= prox;
//     }

//     atual = prox;
//   }

//   return soma;
// }

// console.log(romanoParaDecimal("MMXVIII")); // 2018
// console.log(romanoParaDecimal("VI")); // 6
// console.log(romanoParaDecimal("IV")); // 4

//exercicio2
const vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

function arrayOfNumbers(vector) {
  const result = [];

  for (let index = 0; index < vector.length; index += 1) {
    const numbers = vector[index];
    for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
      const current = numbers[indexSub];

      if (current % 2 === 0) {
        result.push(current);
      }
    }
  }

  return result;
}

console.log(arrayOfNumbers(vector));
console.log(arrayOfNumbers(vector)); // [2, 4, 6, 8, 10]
