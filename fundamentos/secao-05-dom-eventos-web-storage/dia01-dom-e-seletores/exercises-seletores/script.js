console.log(
  (document.querySelector("#header-container").innerText = "Gestão de tempo")
);

console.log(
  (document.querySelectorAll(".emergency-tasks div h3")[0].innerText =
    "Importante e urgente")
);

console.log(
  (document.querySelectorAll(".emergency-tasks div h3")[0].style.color =
    "green")
);
console.log(
  (document.querySelectorAll(".emergency-tasks div h3")[1].style.color =
    "purple")
);
console.log(
  (document.querySelectorAll(".no-emergency-tasks div h3")[0].style.color =
    "orange")
);

console.log(
  (document.querySelectorAll(".no-emergency-tasks div h3")[1].style.color =
    "red")
);

let primeiroQuadrante = document.querySelectorAll(".emergency-tasks div")[0];
console.log((primeiroQuadrante.style.backgroundColor = "blue"));

let segundoQuadrante = document.querySelectorAll(".emergency-tasks div")[1];
console.log((segundoQuadrante.style.backgroundColor = "green"));

let terceiroQuadrante = document.querySelectorAll(".no-emergency-tasks div")[0];
console.log((terceiroQuadrante.style.backgroundColor = "pink"));

let quartoQuadrante = document.querySelectorAll(".no-emergency-tasks div")[1];
console.log((quartoQuadrante.style.backgroundColor = "yellow"));
