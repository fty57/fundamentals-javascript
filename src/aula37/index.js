const nome = ["João", "Maria", "Pedro"];
const pessoa = {
  nome: "Álisson",
  sobrenome: "Santos",
};

// O objeto pessoa não é interável, não é possível percorrer o objeto com for of
for (let i of pessoa) {
  console.log(i);
}

// For clássico - Geralmente com iteráveis (array ou strings)
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.log("####");

// For in - Retorna o índice ou chave (string, array ou objetos)
for (let i in nome) {
  console.log(i);
}

console.log("####");

// For of retorna o valor em si (interáveis, arrays ou strings)
for (let valor of nome) {
  console.log(valor);
}

console.log("####");

nome.forEach((valor, indice, array) => {
  console.log(valor, indice, array);
});
