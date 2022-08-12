function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a, b);
}

// Não serve para retornar o valor da função, ele apenas exibe o valor
// console.log(soma(5, 2));

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Luiz", "Otávio");
const p2 = {
  nome: "João",
  sobrenome: "Oliveira",
};

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

function criaMultiplicador(multiplicador) {
  return function multiplicacao(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
