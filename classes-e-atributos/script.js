// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});

// menu[0] p acessar a primeira posição do array-like e adicionar a classe só nessa primeira posição
menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
// colocar o hasAttribute sempre dentro de uma variável e dps passar no console log p poder verificar
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  const possuiAtributo = item.hasAttribute("alt");
  console.log(item, possuiAtributo);
});

// Modifique o href do link externo no menu
// seletor de atributo css que comece com a (que é link) que começa com href que começa com http
const hrefExterno = document.querySelector('a[href^="http"]');
// primeiro valor que passo no setAtributte é o atributo que quero modificar e depois o novo
hrefExterno.setAttribute("href", "https://google.com/");
console.log(hrefExterno);
