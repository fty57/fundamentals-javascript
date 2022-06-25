const dataAtual = new Date();
let divAtual = document.querySelector("h1");

divAtual.innerHTML = "";
divAtual.innerHTML += dateMask();

// Sat Jun 25 2022 10:26:00 GMT-0300 (Horário Padrão de Brasília)
// segunda-feira, 7 de outubro de 2019 22:52

function dateMask() {
  const hour = dataAtual.getHours();
  const minutes = dataAtual.getMinutes();
  const dayActual = dataAtual.getDate();
  const monthActual = dataAtual.getMonth();
  const yearActual = dataAtual.getFullYear();
  const dayWeek = dataAtual.getDay();
  return `${dateText(dayWeek)}, ${dayActual} de ${monthText(
    monthActual
  )} de ${yearActual} ${hour}:${minutes}`;
}

function dateText(number) {
  switch (number) {
    case 0:
      return "domingo";
    case 1:
      return "segunda-feira";
    case 2:
      return "terça-feira";
    case 3:
      return "quarta-feira";
    case 4:
      return "quinta-feira";
    case 5:
      return "sexta-feira";
    case 6:
      return "sábado";
    default:
      return "";
  }
}

function monthText(number) {
  switch (number) {
    case 0:
      return "janeiro";
    case 1:
      return "fevereiro";
    case 2:
      return "março";
    case 3:
      return "abril";
    case 4:
      return "maio";
    case 5:
      return "junho";
    case 6:
      return "julho";
    case 7:
      return "agosto";
    case 8:
      return "setembro";
    case 9:
      return "outubro";
    case 10:
      return "novembro";
    case 11:
      return "dezembro";
    default:
      return "";
  }
}
