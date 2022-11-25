// let numero1 = 15;
// let numero2 = 12;
// let numero3 = 9;
// let numero4 = 4;

// let adicao = numero1 + numero2;
// let subtracao = numero1 - numero2;
// let multiplicacao = numero1 * numero4;
// let divisao = numero2 / numero4;
// let resto = numero2 % numero4;

// console.log(adicao, subtracao, multiplicacao, divisao, resto);

// if (numero1 > numero3) {
//   console.log("Número 1 é maior.");
// } else {
//   console.log("Número 3 é maior.");
// }

// if (numero2 > 0) {
//   console.log("Positivo.");
// } else if (numero2 < 0) {
//   console.log("Negativo.");
// } else {
//   console.log("Zero.");
// }

// if (numero1 + numero2 + numero3 > 180) {
//   console.log("false");
// } else if (
//   numero1 + numero2 + numero3 < 180 &&
//   numero1 + numero2 + numero3 > 0
// ) {
//   console.log("true");
// } else {
//   console.log("Invalido.");
// }

// let pecaXadrez = "KING";
// switch (pecaXadrez.toLowerCase()) {
//   case "queen":
//     console.log("Vertical, horizontal e diagonal o número de casas que quiser");
//     break;
//   case "king":
//     console.log("Todos os lados somente uma casa");
//     break;
//   case "tower":
//     console.log(
//       "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser."
//     );
//     break;
//   default:
//     console.log("Peça inválida");
// }

// let nota = 80;

// if (nota > 100 && nota < 0) {
//   console.log("Nota inválida!");
// } else if (nota >= 90) {
//   console.log("Nota acima de 90%.");
// } else if (nota >= 80 && nota < 90) {
//   console.log("Nota acima de 80%.");
// } else if (nota >= 70 && nota < 80) {
//   console.log("Nota acima de 70%.");
// } else if (nota >= 60 && nota < 70) {
//   console.log("Nota acima de 60%.");
// } else if (nota >= 50 && nota < 600) {
//   console.log("Nota acima de 50%.");
// } else {
//   console.log("Nota baixo de 50%.");
// }

// numero1 = 4;
// numero2 = 6;
// numero3 = 8;

// if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const precoCusto = 40;
// const precoVenda = 80;
// let imposto = 20 / 100;
// let qtdVendida = 1000;

// if (precoCusto < 0 && precoVenda < 0 && imposto < 0 && qtdVendida < 0) {
//   console.log("Erro!");
// }

// let faturamento = qtdVendida * precoVenda;
// let custoTotal = precoCusto * qtdVendida + faturamento * imposto;

// const lucroTotal = faturamento - custoTotal;

// console.log(lucroTotal);

let salarioBruto = 3000;
let inss;
let impostoRenda;

if (salarioBruto <= 1556.94) {
  inss = 0.08 * salarioBruto;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = 0.09 * salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = 0.11 * salarioBruto;
} else {
  inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  impostoRenda = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  impostoRenda = 0.075 * salarioBase - 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  impostoRenda = 0.15 * salarioBase - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  impostoRenda = 0.225 * salarioBase - 636.13;
} else {
  impostoRenda = 0.275 * salarioBase - 869.36;
}

let salarioLiquido = salarioBase - impostoRenda;

console.log(salarioBase);
console.log(salarioLiquido);
