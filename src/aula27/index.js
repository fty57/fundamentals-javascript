// ? :
const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário vip" : "Usuário normal";

const corUsuario = "#FFF";
const corPadrao = corUsuario || "#000";

if (pontuacaoUsuario >= 1000) {
  console.log("Parabéns, você é um milionário!");
} else {
  console.log("Você não é um milionário!");
}

console.log(nivelUsuario, corPadrao);
