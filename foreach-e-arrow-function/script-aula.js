// const imgs = document.querySelectorAll("img");
// console.log(imgs);

// // a função de callback tem alguns parâmetros tais como:
// // o primeiro sempre é o item específico
// // o segundo é o index
// // o terceiro é o array
// imgs.forEach(function (item, index, array) {
//   // console.log(item, index, array);
// });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  // console.log(item, index, array);
});

const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

let i = 0;
imgs.forEach(function () {
  console.log(i++);
});

// versão reduzida:
imgs.forEach(() => console.log(i++));
