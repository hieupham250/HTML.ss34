let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.createElement("ul");
btn.onclick = function () {
    let text = document.createElement("li");
    text.innerHTML = document.getElementById("input").value;
    document.getElementById("list").appendChild(text);
}