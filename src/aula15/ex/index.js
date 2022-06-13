const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById('titulo');
const divTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
divTexto.innerHTML = `<p>Seu número - 2 é ${numero - 2}</p>`;
divTexto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
divTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
divTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
divTexto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}</p>`;
divTexto.innerHTML += `<p>Arrendondando para cima: ${Math.ceil(numero)}</p>`;
divTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;