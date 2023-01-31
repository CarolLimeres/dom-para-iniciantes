// como selecionar pelo ID:
const animais = document.getElementById("animais");
console.log(animais);

// como selecionar por classe:
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[1]);

// querySelector - seletor geral único (mais utilizado)
// não retorna uma lista, retorna apenas o primeiro elemento que combinar com o seu seletor CSS
const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

// como selecionar o primeiro link interno
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// seletor geral lista:
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
// aqui vai selecionar todas as imagens da classe .animais e retornar uma lista com elas:
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);
// esse elemento é estático

// ao vivo:
const gridSectionHTML = document.getElementsByClassName("grid-section");
// estático:
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

// o forEach faz um loop para interagir com cada item especificamente
gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

// transforme o que ta dentro dos () em um array:
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
