const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Funciona em qualquer um dos for
for (let numero of numeros) {
  if (numero === 2) {
    // Você coloca o continue antes de execultar o bloco de código abaixo da palavra continue
    console.log("Pulei o número 2");
    continue; // Cuidado quando for usar com while, que pode cair em um loop infinito
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo");
    break;
  }
}
