const subContainer = document.getElementById("sub");

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

console.log(subContainer);

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  subContainer.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;

  tagCriada.appendChild(textoCriado);
  subContainer.appendChild(tagCriada);
}

// DOM, refere-se ao navegador e a uma interface de objetos que permitem manipular o elemento dentro da página HTML
// Árvore do DOM, um referindo o outro document > html > header e body > h1
