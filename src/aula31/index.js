/*
let nome = "Luiz";
var nome2 = "Luiz";

let nome = "Otávio";
var nome2 = "Olívia";
*/

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função
/*


let nome = "Luiz";
var nome2 = "Luiz";

if (verdadeira) {
  let nome = "Otávio"; // Criando
  // console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Outra coisa";
    var nome2 = "Otávio";
    console.log(nome, nome2);
    // console.log(nome, nome2);
  }
}
*/
/*
const verdadeira = true;

// A função pode chamar as váriaveis global mas as variaveis da função não podem ser chamadas dentro da função. A função é egoista.
function falarOi() {
  var sobrenome = "Miranda";

  if (verdadeira) {
    let nome = "Luiz"; // Essa variável só existe dentro desse bloco
    console.log(nome);
  }
  // console.log(nome); // Aqui ela não poderia ser chamada
}

falarOi();
*/

console.log(sobrenome);

// No var ele eleva o nível do VAR - undefined
var sobrenome = "Miranda";
// Ele avisa que está errado
let sobrenome = "Miranda";
