const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

// nomes.splice(indice, qtdDelete, elem1, elem2, elem3);
// const removidos = nomes.splice(3, 2);
// console.log(removidos);

// const removidos = nomes.splice(3, 2, "Luiz", "Otávio");

// pop 
// nomes.splice(-1, 1);

// shift
// nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, "Luiz", "Otávio");

// unshift
nomes.splice(0, 0, "Luiz", "Otávio");

console.log(nomes);
