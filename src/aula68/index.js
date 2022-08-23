// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobra os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter((value) => {
  if (value % 2 === 0) return value;
});

console.log(numerosPares);

const numerosDobro = numerosPares.map((value) => {
  return value * 2;
});

console.log(numerosDobro);

const somaTotal = numerosDobro.reduce((previousValue, currentValue) => {
  return (previousValue += currentValue);
});

console.log(somaTotal);

const numerosPares2 = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numerosPares2);
