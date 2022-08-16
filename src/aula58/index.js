// Função fábrica -> objetos criaPessoa
// Função construtora -> objetos Pessoa (new)
function Pessoa(nome, sobrenome) {
  const ID = 1234;
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Álisson", "Véras");
p2.metodo();
