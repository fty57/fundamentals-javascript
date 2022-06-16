function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };
    
    pessoas.push(pessoa);

    resultado.innerHTML += `Nome: ${pessoa.nome}<br>`;
    resultado.innerHTML += `Sobrenome: ${pessoa.sobrenome}<br>`;
    resultado.innerHTML += `Peso: ${pessoa.peso}<br>`;
    resultado.innerHTML += `Altura: ${pessoa.altura}<br>`;
    console.log(pessoas);
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();

/*   form.onsubmit = function (event) {
    event.preventDefault(); // Nesse evento você previne o que era pra acontecer por padrão. De não enviar o formulário.
    alert(1);
    console.log("Foi enviado");
  }; */
