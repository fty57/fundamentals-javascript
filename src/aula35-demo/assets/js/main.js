const subContainer = document.getElementById("sub");

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

console.log(subContainer);

for (let i = 0; i < elementos.length; i++) {
  // let {tag, texto} = elementos[i];
  subContainer.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
}
