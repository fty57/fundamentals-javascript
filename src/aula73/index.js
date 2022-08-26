/*
Object.values
Object.entries
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/

const produto = { nome: "Produto", preco: 1.8 };
const caneca = { ...produto, material: "porcelana" };
const caneca2 = Object.assign({}, produto, { material: "madeira" });
const caneca3 = { nome: produto.nome, preco: produto.preco };
Object.freeze(caneca);

caneca.nome = "Caneca";
caneca.preco = "2.5";
console.log(caneca);
console.log(caneca2);
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
  value: "Qualquer outra coisa",
});
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
produto.preco = "Outra coisa";
console.log(produto);
console.log(Object.keys(produto)); //chaves
console.log(Object.values(produto)); // valores
console.log(Object.entries(produto)); // ambos

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
