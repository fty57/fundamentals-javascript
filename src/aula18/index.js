// Função factory, ela cria objetos
function criaPessoa (nome, sobrenome, idade) {
     return {
          nome,
          sobrenome,
          idade,
          fala () {
               console.log(`${this.nome} ${this.sobrenome} ${this.idade}`)
          },
          incrementaIdade () {
               this.idade++;
          }
     }
}

const pessoa1 = {
     nome: 'Luiz',
     sobrenome: 'Miranda',
     idade: 25,
};

const pessoa2 = {
     nome: 'Maria',
     sobrenome: 'Oliveira',
     idade: 55,
};

const pessoa3 = criaPessoa('João', 'Silva', 50);
const pessoa4 = criaPessoa('Marcos', 'Costa', 31);
const pessoa5 = criaPessoa('Giovana', 'Mel', 18);

console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);
pessoa3.incrementaIdade();
pessoa3.fala();

const nome01 = 'Álisson';
const sobrenome01 = 'Santos';
const idade01 = '20';

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = '20';