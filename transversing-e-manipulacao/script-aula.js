// const h1 = document.querySelector("h1");
// const animaisLista = document.querySelector(".animais-descricao");

// console.log(h1.innerHTML); //retorna só o texto
// console.log(h1.outerHTML); //retorna texto e tudo que está envolvendo esse texto (ou seja, as tags)

// // h1.innerHTML = "<p>Novo Título</p>";
// // h1.outerHTML = "<p>Novo Título</p>";
// // console.log(animaisLista.innerText); //retorna só texto
// // console.log(animaisLista.innerHTML); //retorna texto com tags

// const lista = document.querySelector(".animais-lista");

// // console.log(lista.parentElement); //p pegar o pai do elemento
// // console.log(lista.nextElementSibling); //pega o próximo elemento que está logo abaixo no mesmo nível dele
// // console.log(lista.previousElementSibling); //pega o elemento anterior
// console.log(lista.children[lista.children.length - 1]); //assim me da o ultimo item da lista
// console.log(lista.querySelector("li:last-child")); //outra forma de selecionar o ultimo item

// console.log(lista.childNodes); //o node pega todos os elementos, incluindo espaços que dou no código
// console.log(lista.previousSibling);
// console.log(lista.firstChild); //primeiro filho node, pode puxar algum comentário ou enter ou um elemento mesmo

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");

// // animais.appendChild(titulo); //aqui ta movendo o titulo do contato para o final dos textos dos animais, appendChild é o último filho, entao o h1 contato vira ultimo filho da section de animais

// const mapa = document.querySelector(".mapa");

// // contato.insertBefore(animais, titulo); // aqui os animais foram movidos pra section de contato, antes do título contato

// // contato.removeChild(titulo); //remove o titulo que ta dentro de contato

// // contato.replaceChild(mapa, titulo); //aqui vai substituir o titulo pelo mapa

// contato.replaceChild(lista, titulo); //aqui substituiu o titulo pela lista de imagens de animais

// // contato.insertBefore(animais, mapa); // aqui vai inserir antes do mapa. Mapa ta dentro de contato. o ultimo elemento dos () tem que sempre ser filho do primeiro elemento la do começo e o primeiro elemento dos () é oq estamos movendo

// const novoh1 = document.createElement("h1");
// novoh1.innerText = "Novo Título";
// novoh1.classList.add("titulo");

// mapa.appendChild(novoh1); //após o primeiro filho de mapa adiciona o novoh1, ou seja, adiciona no ultimo elemento

// console.log(novoh1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add("azul");

faq.appendChild(cloneH1);
