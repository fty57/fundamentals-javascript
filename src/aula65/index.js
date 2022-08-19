// Filter -> Sempre retornar um array, com a mesma quantidade de elemento ou menos.
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const isBigThanTen = (value) => {
  if (value >= 10) return value;
};

let filtered = numeros.filter(isBigThanTen);
// console.table(filtered);

let numerosFiltrados = numeros.filter((valor) => valor > 10);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a
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
    idade: 32,
  },
  {
    nome: "Wallace",
    idade: 47,
  },
];

const pessoasFullName = pessoas.filter((valor) => {
  if (valor.nome.length >= 5) return valor;
});

const pessoasBig50 = pessoas.filter((valor) => {
  if (valor.idade > 50) return valor;
});

const pessoasFinishA = pessoas.filter((valor) => {
  if (valor.nome.toLowerCase().endsWith("a")) {
    return valor;
  }
});

console.log(pessoasFullName);
console.log(pessoasBig50);
console.log(pessoasFinishA);
