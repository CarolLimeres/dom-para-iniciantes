// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");

const distanciaImagem = primeiraImagem.getBoundingClientRect();
console.log(distanciaImagem.top);

// ou:

const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log(soma);
}

window.onLoad = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll("a");
// links.forEach((item) => {
//   const altura = item.getBoundingClientRect().height;
//   const largura = item.getBoundingClientRect().width;
//   console.log(altura, largura);

//  if(altura < 48 || largura < 48) {
//   console.log("Não tem o tamanho de link recomendado");
//  } else {
// console.log("Tem o tamanho de link recomendado");
//  }
// });

//ou

const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  console.log(linkWidth, linkHeight);

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  menu.classList.add("menu-mobile");
}
