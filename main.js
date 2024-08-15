// let h1 = document.querySelector(".h1");

// h1.textContent = `${Math.round(Math.random() * 100)}`;

// h1.style.fontSize = "200px";
// h1.style.textAlign = "center";
// h1.style.color = "red";
// h1.style.width = "100%";

// h1.style.backgroundColor = "black";
// document.body.style.backgroundColor = "black";


let h1 = document.querySelector(".h1");

h1.textContent = `Benjamin`;


let ism = prompt(`Ism kiriting:`)
let rang = prompt(`Rang kiriting:`)

h1.textContent = `Benjamin`;
h1.innerHTML = `<mark>${ism}</mark>`;
h1.style.textAlign = "Center";
h1.style.backgroundColor = `${rang}`;

let img = document.querySelector(".img");
img.setAttribute("src", "https://images.uzum.uz/cikn0tb6edfostiikm70/original.jpg")
img.style.width = "50px"