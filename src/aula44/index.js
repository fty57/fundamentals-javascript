try {
  console.log(naoExiste);
} catch (err) {
  console.log("naoExisto não existe.");
}

function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números");
  }
  return x + y;
}

try {
  console.log(sum(1, 2));
  console.log(sum("1", 2));
} catch (e) {
  // console.log(e);
  console.log("Alguma coisa mais amigável para o usuário.");
}
