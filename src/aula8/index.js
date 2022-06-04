/**
 * Álisson Véras Damasceno tem 21 anos, pesa 65kg tem 1.81 de altura e seu IMC é de 19.84
 * Álisson Véras nasceu em 2001
 */

const nome = "Álisson Véras";
const sobrenome = "Damasceno";
const idade = "21";
const anoNascimento = "2001";
const altura = 1.81;
const peso = 65;
let imc;

imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`);

console.log(`${nome} nasceu em ${anoNascimento}`);
