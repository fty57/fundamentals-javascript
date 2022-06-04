// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não pode ter espaços e traços
// Não pode modificar o valor de uma constante
// Case-sensitive
// Não utilize var, utilize const
// Opta por utilizar const

const nome = 'João';
const primeiroNumero = 5;
const segundoNumero = 10;
console.log(nome);
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof nome);
console.log(typeof primeiroNumero + typeof segundoNumero);
console.log(typeof(primeiroNumero + segundoNumero));