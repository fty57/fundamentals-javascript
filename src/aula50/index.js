// A palavra function tem um arguments - peculiaridade do JavaScript - Não existe em arrowfunction
function funcao(a, b, c) {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

funcao(1, 2, 3, 4);

// Se o argumento não for enviado ao parâmetro, o valor do parâmetro será undefined
function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

// Argumentos sãos os valores que são enviados
funcao2(1, 2, 3);

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}

// Escrevendo undefined nos argumentos, o b assume o valor padrão, no caso 2
funcao3(2, undefined, 10);

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: "Álisson", sobrenome: "Véras", idade: 21 };
funcao4(obj);

function funcao5([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao5(["Luiz", "Álisson", "Mamãe"]);

// Os três pontinhos é para receber todo o resto, ele sempre tem que ser o último parâmetro
function conta(operador, acumulador, ...numeros) {
  console.log(arguments);
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }

  console.log(acumulador);
}
conta("+", 1, 20, 30, 40, 50);

// Quando precisar enviar parâmetros indeterminados
const conta2 = (...args) => {
  console.log(args);
};

conta2("+", 1, 20, 30, 40, 50);
