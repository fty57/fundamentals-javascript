// O for each só está disponível dentro de Arrays
const a1 = [12, 52, 63, 44, 53, 26, 71, 83, 79];
let total = 0;

a1.forEach((valor, indice, array) => {
  console.log(array[indice], valor);
  total += valor;
});

console.log(total);
