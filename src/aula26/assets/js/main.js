// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  console.log("Cheguei aqui...");
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(text, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""; // Limpando o HTML
  const p = criaP();
  p.innerHTML = text;
  resultado.appendChild(p);
}
