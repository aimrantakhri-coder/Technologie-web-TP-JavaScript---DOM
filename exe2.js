let form = document.getElementById("form");
let input = document.getElementById("input");
let list = document.getElementById("list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let li = document.createElement("li");
    li.textContent = input.value;
    let btn1 = document.createElement("button");
    btn1.textContent = "Accomplie";
    let btn2 = document.createElement("button");
    btn2.textContent ="Supprimer";
    li.appendChild(btn1);
    li.appendChild(btn2);
    list.appendChild(li);
    input.value = "";
    btn1.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });
    btn2.addEventListener("click", function () {
        li.remove();
    });
});
