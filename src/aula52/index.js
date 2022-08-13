const nome = "Álisson";

// Escopo léxico
// Buscar nome dentro da função
// Se ele não encontrar nome dentro dela, ele vai procurar no pai
function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Otávio";
  falaNome();
}

usaFalaNome();
