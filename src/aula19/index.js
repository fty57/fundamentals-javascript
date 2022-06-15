/**
 * Primitivos (imutáveis) - string, number, boolean, null, undefined, (bigint, symbol) - Valor copiado
 * Referência (mutáveis) - object, array, function - Passados por referência
 */

const pessoa = {
     nome: 'Luiz',
     sobrenome: 'Otávio',
}

// const pessoa2 = pessoa; // Aponta para o mesmo lugar na memória
const pessoa2 = {...pessoa}; // Copia o valor de pessoa para pessoa2

pessoa.nome = 'João';
console.log(pessoa);
console.log(pessoa2);

let array = [1, 2, 3];
let beta = array; // beta é uma referência para o array
// Se você altera um valor do array, o valor do beta também será alterado

let charlie = [...array]; // Assim você copia o valor de A para o charlie, de modo que ele fique independente do array original

array.push(4);
console.log(array, beta);

beta.push(5);
console.log(array, beta);

console.log(charlie);

let nome = 'Luiz';
nome[0] = 'R';
// console.log(nome[0], nome); // Imutável

let a = 'A'; 
let b = a; // Cópia o valor de a para b
// console.log(a, b);

a = 'Outra coisa';
// console.log(a, b);