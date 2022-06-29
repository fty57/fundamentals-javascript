// For in -> lê os indices ou chaves do objeto
const frutas = ["abacaxi", "banana", "caju", "damasco", "uva"];

const pessoa = {
  nome: "Álisson",
  sobrenome: "Santos",
  idade: "21",
};

// pessoa.nome === pessoa['nome'];

for (let key in pessoa) {
  console.log(key, pessoa[key]);
}

/*
for (let index in frutas) {
  console.log(frutas[index]);
}
*/

/*
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
*/
