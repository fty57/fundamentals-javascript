function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("####");

// Pelo menos execulta uma vez, primeiro execulta o do
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

/*
const nome = "Luiz";
let controller = 0;

while (controller < nome.length) {
  console.log(nome[controller]);
  controller++;
}

console.log("Segue a vida...");
*/
