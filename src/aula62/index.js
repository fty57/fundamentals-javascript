// Array são valores por referência
// String, Objetos, Funções, Números
// const nomes = new Array("Eduardo", "Maria", "Joana");
// Rest operator é o mesmo operador do Spread
// Vamos espalhar os dados do array nomes dentro da variável novo, assim fazendo uma cópia e não mais apontando para o mesmo valor na memória // const novo = nomes; é diferente const novo = [...nomes];
const nomes = ["Eduardo", "Maria", "Joana", "João", "Wallace"];
const novo = nomes.slice(1, -2);

console.log(novo);

// const nome = "Francisco Álisson Véras";
// const names = nome.split(" ");
const names2 = ["Francisco", "Álisson", "Véras"];
const name = names2.join(" ");
console.log(name);
