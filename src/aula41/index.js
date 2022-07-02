// Escreva uma função que recebe 2 números e retorne o maior deles

const bigger = (firstValue, secondValue) => {
  if (firstValue > secondValue) {
    return firstValue;
  } else if (firstValue < secondValue) {
    return secondValue;
  } else {
    return "Os dois são o mesmo valor";
  }
};

function max(x, y) {
  return x > y ? x : y;
}

const max2 = (x, y) => (x > y ? x : y);

console.log(max2(100, 20));
