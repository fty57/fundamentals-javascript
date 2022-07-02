// Escreva uma função chamada ePaisagem
// que recebe dois argumentos, largura e altura
// de uma imagem (number)
// retorne true se a imagem estiver no modo paisagem

const isLandscape = (width, height) => {
  if (width > height) return true;
  return false;
};

const isLandscape2 = (width, height) => {
  return width >= height;
};

console.log(isLandscape2(1080, 1920));
