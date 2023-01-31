// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(urlAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
// o querySelector vai selecionar o primeiro elemento que ele achar com o que for colocado nos ()
// nesse exemplo, eu tenho um h1 e um h2 com a classe ativo, mas ele retornou só o h1
const elementoAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);
