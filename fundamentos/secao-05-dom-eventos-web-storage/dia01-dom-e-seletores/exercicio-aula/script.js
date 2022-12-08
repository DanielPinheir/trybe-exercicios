const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

console.log((document.getElementById("page-title").innerText = "Forrest Gump"));
console.log((document.getElementById("paragraph").style.color = "green"));
console.log(
  (document.getElementById("second-paragraph").innerText =
    "O contador de história")
);
document.getElementById("second-paragraph").style.color = "blue";
console.log(
  (document.getElementById("subtitle").innerHTML = "<h2>Categoria</h2>")
);
console.log(
  (document.getElementsByClassName("parag")[0].style.backgroundColor = "purple")
);
console.log((document.getElementsByTagName("h4")[0].style.color = "orange"));

console.log(document.querySelectorAll("p"));
