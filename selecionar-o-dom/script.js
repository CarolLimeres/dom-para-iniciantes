// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensSelecionadas = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensSelecionadas);

// Selecione todos os links internos (onde o href começa com #)
// o ^ serve pra selecionar os que começam com tal coisa
const links = document.querySelectorAll('[href^="#"]');
// que começam com #, se tivesse sem o ^ ia retornar só o que tivesse apenas # escrito.
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

//outra forma:
// const animais = document.querySelector(".animais-descricao");
// const h2Animais = animais.querySelector("h2");
// console.log(animais);
// console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
