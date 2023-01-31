// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault(); //p evitar o comportamento padrão de quando clicar no link ir direto pra parte da pag que tem o mesmo id
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

//forEach p adicionar o evento a cada um dos links
linksInternos.forEach((link) => {
  // console.log(link);
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *"); //todos os itens que estiverem dentro do body
// console.log(todosElementos);

function elementosClicados(event) {
  // console.log(event.currentTarget);
  event.currentTarget.remove();
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", elementosClicados);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site
function handleClickT(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior"); //p falar com o html tem que usar o document.documentElement, p falar com o body uso document.body
  }
}

window.addEventListener("keydown", handleClickT);
