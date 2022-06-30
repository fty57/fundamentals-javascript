const divParagrafos = document.querySelector(".paragrafos");
const ps = divParagrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;
console.log(backgroundColor);

for (let p of ps) {
  console.log(p);
  p.style.backgroundColor = backgroundColor;
  p.style.color = "white";
}
