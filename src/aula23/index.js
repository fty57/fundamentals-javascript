/*
&& -> false && true -> false 'o valor'
|| -> true && false -> true "o valor verdadeiro"
falsy -> false, 0, "", null, undefined, NaN
truthy -> true, 1, "a", [], {}
*/

console.log(0 || false || null || 'Luiz Otávio' || true); // Luiz Otávio

// O último valor é o retornado
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || 'João' || d || e); 

const corUsuario = 'vermelho';
const corPadrao = corUsuario || '#fff';
console.log(corPadrao);


console.log({} && undefined && "Maria");

function falarOi(){
     return "Oi"
}

let vaiExecutar = 'João';

console.log(vaiExecutar && falarOi());
