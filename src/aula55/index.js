// IIFE -> Immediately invoked function expression
// Jeito padrão
// Você tem que lembrar de envolver essa função dentro de um parênteses
function qualquerCoisa() {
  console.log(1234);
}
qualquerCoisa();

(function () {
  const nome = "Álisson";
  console.log(nome);
})();

(function (idade, peso, altura) {
  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Álisson"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(20, 60, 1.70);

const nome = "Véras";
