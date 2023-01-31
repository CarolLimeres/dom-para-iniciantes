function initTabNav() {
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
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt"); //dt é a pergunta (dt) que ta dentro desssa classe (js-accordion)
  const activeClass = "ativo";

  // tem que verificar se ele existe pq se não da erro
  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(activeClass); //nextElementSibling p adicionar ao dd

    function activeAccordion(event) {
      this.classList.toggle(activeClass); //aqui adiciona a classe pro dt mesmo (a pergunta)
      this.nextElementSibling.classList.toggle(activeClass); // this p selecionar o item que to clicando. (event.currentTarget) da na mesma tambem.
      //nextElementSibling vai dar o elemento que vem a seguir (no caso o dd)
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
+initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //p pegar só os links internos do site

  function scrollToSection(event) {
    event.preventDefault(); //com o preventDefault aqui, agora eu clico no link e nao acontece nada

    //pegar href do item que cliquei:
    const href = event.currentTarget.getAttribute("href"); //com o .getAttribute pega o atributo href só, nao o link inteiro (esse href que ele me dá é igualzinho selecionar uma id com querySelector e é igual a selecionar com CSS)
    const section = document.querySelector(href); //com isso ja ta fazendo a ligação entre link do menu e section correspondente, pq agora o nome do link fica igualzinho ao que ta na id de cada section

    //o método scrollTo vai fazer o scroll de acordo com os números passados como argumento
    // window.scrollTo(0, topo); //o primeiro argumento é o eixo x (horizontal) e o segundo é o eixo y (vertical)

    //com o método scrollIntoView não preciso mais pegar a distância entre a section e o topo, pq isso leva o elemento e é como se eu falasse: bota esse elemento na minha view.
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // scroll suave (forma alternativa):
    // const topo = section.offsetTop; //o offsetTop vai dar a distância exata entre o topo da pag e a seção
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  //adicionar evento p cada item:
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection); //a função scrollToSection vai fazer o scroll exatamente p seção do link
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll"); //a classe js-scroll eu coloquei em cada section específica (animais, faq e contato)
  if (sections.length) {
    //verificar se os sections existem pra fazer a função de animação
    const windowMetade = window.innerHeight * 0.6; //fazer esse cálculo p q qnd eu fizer scroll nao ficar um espaço embaixo em branco e só aparecer algo quando ele tiver no topo da pagina, p adaptar a diferentes tipos de tela

    // primeiro preciso saber qual distância que cada elemento ta do topo
    function animaScroll() {
      sections.forEach((section) => {
        //pegar a distância que o elemento ta do topo nesse exato momento:
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        // verificar se o elemento é menor que 0 pq se o número ta negativo significa que passou do topo
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo"); //com isso faz a animação ocorrer dnv
      });
    }

    animaScroll(); //ativando a função aqui já, o site nao aparece em branco (pq antes só começava a aparecer as coisas qnd ativava a função animaScroll, aqui embaixo)

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
