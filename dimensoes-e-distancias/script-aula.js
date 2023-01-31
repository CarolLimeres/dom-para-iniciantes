const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2Left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();
// retorna um objeto

// distancia do elemento pro topo da pag:
console.log(h2rect.top);

if (h2rect.top < 0) {
  console.log("Passou do elemento");
}
// o innerWidth vai pegar exatamente o tamanho da janela
// o outerHeight conta a altura junto com a barra de endereço
// geralmente é mais usado o innerHeight pq nao precisamos saber o tamanho da barra de endereço
// o outerWidth conta a largura junto com o console se tiver aberto
console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerHeight,
  window.outerWidth,
  window.pageYOffset // mede o tanto de scroll que foi dado
);

const small = window.matchMedia("(max-width: 600px)").matches;
// até 600px
// esse valor ja retorna true ou false (colocando o .matches ali)

if (small) {
  console.log("Usuário Mobile");
} else {
  console.log("Usuário desktop");
}
