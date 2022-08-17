// Função recursivas é um função que se chama
function recursiva(max) {
  console.log(max);
  if (max >= 10) return; // Prevenção para não chamar a função ilimitadamente
  max++;
  recursiva(max);
}

recursiva(0);
