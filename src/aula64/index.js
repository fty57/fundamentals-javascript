const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1 + a2; // Retorna uma string
const a3 = a1.concat(a2, [7, 8, 9], "Luiz");
// ... rest -> ... spread
// Espalhando os valores do array para o a4
const a4 = [...a1, "Luiz", ...a2, ...[7, 8, 9]];
console.table(a3);
console.table(a4);
