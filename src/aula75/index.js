// new Object -> Object.prototype
const objA = {
  chaveA: "A",
  // __proto__ : Object.prototype
};

const objB = {
  chaveB: "B",
};

const objC = new Object();
objC.chaveC = "C";
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Colocar os métodos fora da função construtora
Produto.prototype.desconto = function (value) {
  this.preco = this.preco - this.preco * (value / 100);
};
Produto.prototype.aumento = function (value) {
  this.preco = this.preco + this.preco * (value / 100);
};
const p1 = new Produto("Camisa", 50);
// p1.desconto(100);
p1.aumento(100);

const p2 = {
  nome: "Caneca",
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(40);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43,
  },
});

p3.aumento(10);
console.log(p1);
console.log(p2);
console.log(p3);
