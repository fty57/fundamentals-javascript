// Função fábrica -> objetos criaPessoa
// Função construtora -> objetos Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 1234;
  const metodoInterno = function () {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Álisson", "Véras");
p2.metodo();
