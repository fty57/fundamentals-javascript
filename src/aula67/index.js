// Reduce é mais utilizada para reduzir o array para um único elemento

// Some todos os números (reduce)
// Retorne num array com os pares (Filter), pode ser feito com reduce, mas o recomendado é o filter
// Retorne um array com o dobro dos valroes (Map), pode ser feito com reduce, mas o recomendado é o map
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0); // Esse 0 é referente ao valor que inicia o acumulador, caso ele não começe com 0, o primeiro valor do array será adicionado ao acumulador

console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
  {
    nome: "Luiz",
    idade: 62,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Eduardo",
    idade: 55,
  },
  {
    nome: "Letícia",
    idade: 19,
  },
  {
    nome: "Rosana",
    idade: 64,
  },
  {
    nome: "Wallace",
    idade: 47,
  },
];

const maisVelha = pessoas.reduce(function (acumulador, value) {
  if (acumulador.idade > value.idade) return acumulador;
  return value;
}, 0);

console.log(maisVelha);
