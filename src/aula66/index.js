// A função map não retorna um novo array, ela altera os valores do array existente
// Map vai sempre ter o mesmo tamanho do array original

const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((value) => {
  return value * 2;
});

//console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
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

const nomePessoa = pessoas.map((value) => {
  return value.nome;
});

// Retorno igual a função de baixo
const deleteNome = pessoas.map((value) => {
  delete value.nome;
  return value;
});

// Retorno igual a função de cima
const idades = pessoas.map((obj) => ({ idade: obj.idade }));

const adicionaID = pessoas.map((value, i) => {
  value.id = (i + 1) * 1000;
  return value;
});

// console.log(nomePessoa);
// console.log(deleteNome);
console.log(adicionaID);
