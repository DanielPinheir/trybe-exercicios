// let car = {
//   type: "Fiat",
//   model: "500",
//   color: "white",
// };

// console.log(car);
// console.log(car.color);
// console.log(car.type);

// let diasDaSemana = {
//   1: "domingo",
//   2: "segunda",
//   3: "terça",
//   4: "quarta",
//   5: "quinta",
//   6: "sexta",
//   7: "sábado",
// };

// //diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana["1"]); // domingo

// let conta = {
//   agencia: "0000",
//   banco: {
//     cod: "012",
//     id: 4,
//     nome: "TrybeBank",
//   },
// };

// let infoDoBanco = "banco";
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]["nome"]); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta["agencia"]); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta["banco"]["id"]); // 4
// console.log(conta.banco.nome);
// console.log(conta["banco"]["cod"]);

// let usuario = {
//   id: 99,
//   email: "jakeperalta@gmail.com",
//   infoPessoal: {
//     nome: "Jake",
//     sobrenome: "Peralta",
//     endereco: {
//       rua: "Smith Street",
//       bairro: "Brooklyn",
//       cidade: "Nova Iorque",
//       estado: "Nova Iorque",
//     },
//   },
// };

// console.log(usuario["id"]);
// console.log(usuario.email);

// console.log(usuario.infoPessoal.endereco.rua);
// console.log(usuario["infoPessoal"]["endereco"]["cidade"]);

// let moradores = [
//   {
//     nome: "Luiza",
//     sobrenome: "Guimarães",
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: "William",
//     sobrenome: "Albuquerque",
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: "Murilo",
//     sobrenome: "Ferraz",
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: "Zoey",
//     sobrenome: "Brooks",
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador);
// console.log(primeiroMorador["andar"]);

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador);
// console.log(ultimoMorador.nome);

// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: { golden: 2, silver: 3 },
// };

// console.log(
//   `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`
// );

// player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.table(player);

// console.log(
//   "A jogadora " +
//     player["name"] +
//     " foi eleita a melhor do mundo por " +
//     player.bestInTheWorld.length +
//     " vezes."
// );

// console.log(
//   `A jogadora ${player.name} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`
// );

// let pizzas = {
//   sabor: "Quatro queijos",
//   preco: 39.9,
//   bordaCatupiry: true,
// };

// for (let key in pizzas) {
//   console.log(key, pizzas[key]);
// }

//

//funções

const a = 30;
const b = 5;
const c = 40;

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function resto(a, b) {
  return a % b;
}

function bigNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function bigThreeNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

function positiveNegative(number) {
  if (number < 0) {
    return "negative";
  } else {
    return "positive";
  }
}

function trianguloValidation(ang1, ang2, ang3) {
  if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    return "Erro! Angulo inválido";
  } else if (ang1 + ang2 + ang3 != 180) {
    return false;
  } else {
    return true;
  }
}

console.log(adicao(a, b));
console.log(subtracao(a, b));
console.log(resto(a, b));
console.log(multiplicacao(a, b));
console.log(divisao(a, b));
console.log(bigNumber(a, b));
console.log(bigThreeNumber(a, b, c));
console.log(positiveNegative(-4));
console.log(trianguloValidation(60, 60, -40));
