const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("ativo"); //p texto do primeiro item já ficar aparecendo qnd abro o site (sem isso fica sem texto nenhum)

// p verificar se existe o tabMenu ou não:
if (tabMenu.length && tabContent.length) {
  //função p ativar o tab de acordo com o numero escolhido
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo"); //p adicionar a classe ativo p index escolhido
  }

  //p adicionar o addEventListener p cada item da minha tab
  // primeiro fazer um loop p cada item da tab (cada li de imagens)
  // o argumento itemMenu é o item da vez que ta rodando e o argumento index mostra exatamente o index de cada uma das imagens
  // p cada item eu adiciono um evento de click
  // ai a partir do evento de click, quando clicar vai acionar a função que vai ativar o activeTab que recebe como argumento o index (index do item que to clicando)
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index); //vai acionar a função activeTab de acordo com o item (index) clicado
    });
  });
}
