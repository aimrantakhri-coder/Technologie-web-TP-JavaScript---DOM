let container = document.getElementById("container");
let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe";
container.appendChild(paragraphe);
paragraphe.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";
container.addEventListener("click", function () {
    paragraphe.textContent = "Un clic a été détecté";
});
