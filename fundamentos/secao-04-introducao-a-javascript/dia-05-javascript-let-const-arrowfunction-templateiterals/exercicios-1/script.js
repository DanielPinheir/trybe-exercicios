//Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log("Idade dentro do for:", idade);
  }
}
imprimeIdade();

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
let pessoa = {
  nome: "Henri",
  idade: 20,
};
pessoa = {
  nome: "Luna",
  idade: 19,
}; // Altere essa estrutura para corrigir o erro.
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

//Modifique a variável para que não ocorra Erro;
let favoriteFood = "Lasanha";
favoriteFood = "Hamburguer";
console.log(favoriteFood);

//Modifique as concatenações para template literals.
const name = "Adriana";
const lastName = "Soares";
console.log(`Olá, ${name} ${lastName}!`);
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a, b)}`);

// Modifique a estrutura das funções a seguir para que elas sejam arrow functions;
//Transforme a função numeroAleatorio em uma arrow function;
// function numeroAleatorio() {
//   return Math.random()
// }
// console.log(numeroAleatorio());

const numeroAleatorio = () => (Math.random() * 100).toFixed(2);
console.log(numeroAleatorio());
