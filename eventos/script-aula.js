// o método addEventListener adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

//elemento.addEvent Listener(event, callback, options)

const img = document.querySelector("img");

//primeiro é o evento que a gente quer e depois o callback, ou seja, a função que será ativada

//o primeiro parâmetro do callback é referente ao evento que ocorreu
// esse event vai retornar um evento com diversas propriedades e métodos
// pode ter qualquer nome
function callback(event) {
  console.log(event);
}

// img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget); //esse aqui aparece exatamente a lista que eu adicionei ao evento (animais-lista)
  console.log(event.target); //o target da exatamente o que cliquei, no caso do animais-lista ele me da exatamente a imagem que cliquei, diferente do currentTarget que aparece a lista toda sempre
  console.log(event.type); //mostra uma string com o tipo do evento
}

// animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]'); //link que começa com http

function handleLinkExterno(event) {
  event.preventDefault(); //o event.preventDefault() vai previnir o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
  // console.log(event);
  console.log(this.getAttribute("href")); //vai mostrar exatamente o elemento que to clicando, mesma coisa que o currentTarget. Posso tb usar os mesmos métodos e propriedades de elemento que tem, no exemplo de cima o getAttribute
  console.log(event.currentTarget);
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event); //pra primeiro mostrar o tipo e depois o objeto inteiro
}

//posso adicionar vários eventos ao mesmo elemento também
// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent); //se passa o mouse em cima do elemento o evento é disparado
// h1.addEventListener("mousemove", handleEvent); //a cada micro movimento de mouse em cima do elemento dispara o evento

// window.addEventListener("scroll", handleEvent); //os métodos e propriedades do evento de scroll por exemplo, são completamente diferentes dos de click
// window.addEventListener("resize", handleEvent);

function handleKeyboard(event) {
  //p colocar em fullscreen o site:
  // if (event.key === "f") {
  //   document.body.classList.toggle("fullscreen"); //o toggle vai adicionar quando ñ tiver e remover quando tiver
  // }
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  }
  // console.log(event.key); //mostra que tecla to apertando no teclado
}

window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img"); //nodeList de imagens

function handleImg(event) {
  console.log(event.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
