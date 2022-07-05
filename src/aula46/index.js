try {
  // É executada quando não há erros
} catch (e) {
  // É executada quando há erros
} finally {
  // Ele sempre será executado
}

try {
  // console.log(a);
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("Deu erro");
  } finally {
    console.log("Também sou finally");
  }
} catch (e) {
  console.log("Tratando o erro");
} finally {
  console.log("Finally - Eu sempre sou executado");
}

function showTime(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    seconds: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = showTime(11);
  console.log(hora);
} catch (e) {
  // Tratar erro
  console.log(e);
} finally {
  console.log("Tenha um bom dia.");
}
