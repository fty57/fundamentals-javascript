// Função Date é uma função construtora
// const tresHoras = 60 * 60 * 3 * 1000; // Milisegundos
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix
// const data = new Date(2019, 3, 20, 15, 14, 20, 500); // Ano, mês, dia, hora, minuto, segundo e milisegundos
// const data = new Date(1655989119803);
// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1);
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Min", data.getMinutes());
// console.log("Seg", data.getSeconds());
// console.log("Ms", data.getMilliseconds());
// console.log("Dia semana", data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString());

function zeroToLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
  const dia = zeroToLeft(data.getDate());
  const mes = zeroToLeft(data.getMonth() + 1);
  const ano = zeroToLeft(data.getFullYear());
  const hora = zeroToLeft(data.getHours());
  const min = zeroToLeft(data.getMinutes());
  const seg = zeroToLeft(data.getSeconds());

  return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(dataBrasil);
