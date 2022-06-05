// string, number, undefined, null, boolean, symbol
const nome = 'Álisson';       // string
const nome1 = "Álisson";      // string
const nome2 = `Álisson`;      // string
const num1 = 10;              // number
const num2 = 10.52;           // number
let nomeAluno;                // undefined, quem seta o undefined é o próprio JavaScript, não configura-se esse valor
let sobrenomeAluno = null;    // null, não aponta para local nenhuma na memória
const aprovado = true;        // boolean, (lógico)

// Consegue ver o tipo e o valor
console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

// O valor de b apontar para o mesmo lugar na memória que o a;
let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b);
