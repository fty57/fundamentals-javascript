const numero = 10;

// Se isso ocorrer, faça isso {código}
// Se não faça isso {código}
// No primeiro momento que o if encontrar um verdadeiro ele executa o código dentro do if e depois sai do if

if(numero <= 10){
     console.log('É menor ou igual a 10');
}

if(numero >= 0 && numero <= 5){
     console.log('Positivo 0 - 5');
}else if(numero >= 6 && numero <= 8){
     console.log('Intervalo 6 - 8');
}else if(numero >= 9 && numero <= 11){
     console.log('Intervalo 9 - 11');
}else{
     console.log('Fora do intervalo 0 - 11');
}