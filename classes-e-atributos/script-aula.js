const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste");
menu.classList.remove("azul");
// se a classe já existe o toggle remove ela, se não existe ele adiciona
// menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// outra forma de manipular classes: (mas a ideal é a que ta sendo usada em cima)
menu.className += " vermelho";

console.log(menu.className);

// classList serve pra ver as classes que tem
// o classList é uma array-like
// esse objeto possui métodos
// console.log(menu.classList);

const animais = document.querySelector(".animais");
// o .attributes retorna um objeto do tipo array-like
console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");

const srcImg = img.getAttribute("alt");

// o setAttribute cria um novo atributo se não existir ou atualiza um atributo existente
img.setAttribute("alt", "É uma raposa");

// hasAttribute vai verificar se o atributo existe retornando true ou false
const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
