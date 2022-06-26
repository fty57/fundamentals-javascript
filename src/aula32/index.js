/*
let a = "A";
let b = "B";
let c = "C";

// O que está do lado esquerdo é a desestruturação
// Do lado direito estou reatribuindo essas variáveis
const numbers = [b, c, a];
[a, b, c] = numbers;

console.log(a, b, c);
*/

// ... rest operator = para pegar o resto de alguma coisa
// ... spread = no sentido de distribuir alguma coisa

const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// ...rest tem o resto do meu array, o que não utilizei na destruturação inicial
// const [firstNumber, , secondNumber, , thirdNumber, ...rest] = numbers;
// console.log(firstNumber, secondNumber, thirdNumber);
// console.log(rest);

// Você sai saltitando entre os valores utilizando espaços vazios
// const [firstNumber, , secondNumber, , thirdNumber, ...rest] = numbers;

const numbers2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [, [, , seis]] = numbers2;
const [list1, list2, list3] = numbers2;

console.log(list3[2]);

console.log(numbers2[1][2]);
