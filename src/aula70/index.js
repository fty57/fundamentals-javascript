//
// Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); // Agora nenhum objeto dessa função pode ser alterado
  // return this; // {nome, sobrenome}
}

// p1 = (ENDERECO_MEMORIA) -> 'Valor'
// p1.ENDERECO_MEMORIA = {nome: 'Outra coisa'}
// p1 = (NOVO_ENDERECO_MEMORIA)
// A constante não permite que você aponte para um novo endereço de memória, mas você pode alterar o valor desse endereço
const p1 = new Pessoa("Luiz", "Miranda");
Object.freeze(p1); // Você trava os valores desse objeto
p1.nome = "Outra coisa";
const p2 = new Pessoa("Maria", "Miranda");
console.log(p1);

/*
// Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1.nomeCompleto);
*/
/*
const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;
pessoa1.falarNome = function () {
  console.log(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

console.log(pessoa1.getDataNascimento());
*/
/*
const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";

const pessoa2 = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

delete pessoa1.nome;
console.log(pessoa1);
/*
/*
const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

const chave = "nome";
console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa[chave]);
*/
