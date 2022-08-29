// O Javascript é baseado em protótipos para passar propriedades
// Construtora -> molda (class)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}
// O estou aqui está dentro e __proto__, ficando dentro de Pessoa.prototype
// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.estouAqui = "Look, me!";
// Primeiro ela procura o método (nomeCompleto) dentro do objeto, se ela não encontrar, ela vai procurar dentro do __proto__
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa("Luiz", "O.");
const pessoa2 = new Pessoa("Maria", "A.");
const data = new Date();

console.dir(pessoa1);
console.dig(pessoa2);
console.dir(data);

// pessoa1 --> Pessoa.prototype --> Object.prototype
// Objeto1 --> Objeto2 --> Objeto3
