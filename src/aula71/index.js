// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Serve para exibir o retorno
    value: estoque,
    writable: true, // O valor não pode ser alterado
    configurable: false, // Pode apagar a chave, reconfigurar a chave
  });
}
const p1 = new Produto("Camisa", 20, 3);
console.log(Object.keys(p1)); // Ele retorna as chaves, o enumerable serve pra evidênciar essas chaves

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperties(this, {
    nome: { enumerable: true, value: nome, writable: true, configurable: true },
    preco: {
      enumerable: false,
      value: nome,
      writable: false,
      configurable: false,
    },
  });
  // Dentro do defineProperty & defineProperties você pode criar os Getters e Setters
}
