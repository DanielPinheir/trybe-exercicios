// const myName = "Daniel";
// const birthCity = "Fortaleza";
// let birthYear = 1979;
// birthYear = 2030;
// birthCity = "Eusébio";
// console.log(birthYear);
// console.log(myName);
// console.log(birthCity);

// const base = 5;
// const heigth = 8;
// const area = base * heigth;
// const perimeter = base + heigth * 2;

// console.log(area);
// console.log(perimeter);

// const notaDaniel = 90;
// if (notaDaniel >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// } else if (notaDaniel < 80 && notaDaniel >= 60) {
//   console.log("Você está na nossa lista de espera");
// } else {
//   console.log("Você foi reprovada(o)");
// }

let resultado = "lista";

switch (resultado) {
  case "aprovado":
    console.log("Parabéns, você foi aprovado");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovado":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Informação incorreta!");
}
