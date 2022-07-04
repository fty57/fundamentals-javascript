// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

const fizzBuzz = (value) => {
  const isDivisible3 = value % 3 === 0;
  const isDivisible5 = value % 5 === 0;
  const isNumber = Number.isInteger(value);

  if (isDivisible3 && isDivisible5) {
    return "FizzBuzz";
  } else if (isDivisible3) {
    return "Fizz";
  } else if (isDivisible5) {
    return "Buzz";
  } else {
    if (isNumber) {
      return `O número - ${value} é um número`;
    }
    return value;
  }
};

for (let i = 0; i < 100; i++) {
  console.log(fizzBuzz(i));
}
