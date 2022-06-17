/*
Operadores Lógicos
&& -> AND -> E -> Todas as condições devem ser verdadeiras para retornar true
|| -> OR -> OU -> Todas as condições devem ser falsas para retornar false
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && false;
const expressaoOr = false || false || false || false || true;
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(!false);