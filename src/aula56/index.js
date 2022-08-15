// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      // Deleta esse this para visualizar a diferença
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala(assunto = "falando sobre NADA.") {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

// this.nome está fazendo uma refência ao nome do objeto
// this.peso se refere ao peso do objeto
// Getter - obter o valor e não chamar a função
// get imc() faz a função fingir ser um atributo do objeto

const p1 = criaPessoa("Álisson", "Véras", 1.8, 80);
const p2 = criaPessoa("João", "Véras", 1.8, 60);
const p3 = criaPessoa("Junior", "Véras", 1.5, 110);
p1.nomeCompleto = "Maria Oliveira Silva";
console.log(p1.nome);
console.log(p1.nomeCompleto);
console.log(p1.fala());

console.log(p3.imc);
