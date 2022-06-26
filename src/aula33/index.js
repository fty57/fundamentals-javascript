const people = {
  name: "Álisson",
  surname: "Véras",
  year: 21,
  andress: {
    street: "Av Brasil",
    number: 320,
  },
};

// Via desestruturação você joga o valor people.name em uma variável
// Atribuição via desestruturação
// year: y o nome da nova variável é y
// andress: { street, number } você não tem a variável endereço, tem apenas as duas outras variáveis
//   andress: { street, number } !=  andress

const name2 = people.name;
const {
  name = "Nome padrão",
  surname,
  year: y,
  andress: { street: s, number },
  andress,
} = people;
console.log(name, surname, y, s, number, andress);

// Pegando o resto
// const { name, ...resto } = people;
// console.log(resto);
