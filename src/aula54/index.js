// callback é uma função que pode ou não ser recebida aqui
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

// Você criou uma corrente
// Callback hell - Boneca Russa
// Você seta a ordem desejada, indepentente da demora

/*
f1();
f2();
f3();
console.log("Olá mundo!");
*/

// Jeito ruim
f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá mundo!");
    });
  });
});


// Jeito certo
// Callback coisas que você chama quando alguma coisa terminar de ocorrer
// Uma solução melhor que isso é Promisses
f1(f1CallBack);

function f1CallBack() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Olá mundo!");
}
