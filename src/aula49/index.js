// Declaração de função (Function hoisting)
// Elevação da declaração de funções para o topo do nosso Javascript
function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo: ");
  funcao();
}

executaFuncao(souUmDado);
executaFuncao(falaOi);

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function.");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};

obj.falar();
