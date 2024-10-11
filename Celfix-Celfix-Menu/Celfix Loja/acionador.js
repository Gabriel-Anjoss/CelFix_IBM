const elementoOculto = document.getElementById("elemento-oculto");
const elementoAcionador = document.getElementById("elemento-acionador");

elementoAcionador.addEventListener("mouseenter", function() {
  elementoOculto.classList.add("visible");
});

elementoAcionador.addEventListener("mouseleave", function() {
  setTimeout(function() {
    if (!elementoOculto.matches(":hover")) {
      elementoOculto.classList.remove("visible");
    }
  }, 100);
});

elementoOculto.addEventListener("mouseenter", function() {
  // Nada a ser adicionado aqui, a transição cuidará do movimento.
});

elementoOculto.addEventListener("mouseleave", function() {
  elementoOculto.classList.remove("visible");
});

const menus = document.querySelector(".menu-perfil");
const nav = document.querySelector(".navbar");

menus.addEventListener("click", () => nav.classList.toggle("active"));

const menuPerfil = document.querySelector(".menu-perfil");
const perfilImg = document.querySelector(".menu-perfil img");

let isPerson = true; // Variável para controlar o estado da imagem

menuPerfil.addEventListener("click", () => {
  // Inverta o estado da variável
  isPerson = !isPerson;

  // Atualize a imagem com a transição
  perfilImg.style.opacity = 0;
  setTimeout(() => {
    perfilImg.src = isPerson
      ? "Imagens/person.svg"
      : "Imagens/close_FILL0_wght400_GRAD0_opsz24.svg";
    perfilImg.style.opacity = 1;
  }, 200); // Tempo de transição em milissegundos
});


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
},  6000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}


const carouselInner = document.getElementById('carousel-inner');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    let translateX = 0;
  
    prevButton.addEventListener('click', () => {
      if (translateX < 0) {
        translateX += 100;
        carouselInner.style.transform = `translateX(${translateX}%)`;
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (translateX > -200) {
        translateX -= 100;
        carouselInner.style.transform = `translateX(${translateX}%)`;
      }
    });




    const carouselInner2 = document.getElementById('carousel-inner2')
    const prevButton2 = document.getElementById('prev2');
    const nextButton2 = document.getElementById('next2');

prevButton2.addEventListener('click', () => {
  if (translateX < 0) {
    translateX += 100;
    carouselInner2.style.transform = `translateX(${translateX}%)`;
  }
});

nextButton2.addEventListener('click', () => {
  if (translateX > -200) {
    translateX -= 100;
    carouselInner2.style.transform = `translateX(${translateX}%)`;
  }
});

const carouselInner3 = document.getElementById('carousel-inner3')
const prevButton3 = document.getElementById('prev3');
const nextButton3 = document.getElementById('next3');

prevButton3.addEventListener('click', () => {
if (translateX < 0) {
translateX += 100;
carouselInner3.style.transform = `translateX(${translateX}%)`;
}
});

nextButton3.addEventListener('click', () => {
if (translateX > -200) {
translateX -= 100;
carouselInner3.style.transform = `translateX(${translateX}%)`;
}
});

const carouselInner4 = document.getElementById('carousel-inner4')
const prevButton4 = document.getElementById('prev4');
const nextButton4 = document.getElementById('next4');

prevButton4.addEventListener('click', () => {
if (translateX < 0) {
translateX += 100;
carouselInner4.style.transform = `translateX(${translateX}%)`;
}
});

nextButton4.addEventListener('click', () => {
if (translateX > -200) {
translateX -= 100;
carouselInner4.style.transform = `translateX(${translateX}%)`;
}
});


document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  scrollToTopButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Role suavemente em vez de um salto instantâneo
      });
  });
});

// Seleciona todos os elementos com a classe "item"
const items = document.querySelectorAll(".item");

// Adiciona um ouvinte de evento de clique a cada item
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove a classe "active" de todos os itens
    items.forEach((i) => {
      i.classList.remove("active");
    });

    // Adiciona a classe "active" apenas ao item clicado
    item.classList.add("active");
  });
});


const menus2 = document.querySelector(".filtrobtn");
const nav2 = document.querySelector(".filtro");

menus2.addEventListener("click", () => nav2.classList.toggle("active"));

const menuPerfil2 = document.querySelector(".filtrobtn");
const perfilImg2 = document.querySelector(".filtrobtn img");

let isPerson2 = true; // Variável para controlar o estado da imagem

menuPerfil2.addEventListener("click", () => {
  // Inverta o estado da variável
  isPerson2 = !isPerson2;

  // Atualize a imagem com a transição
  perfilImg2.style.opacity = 0;
  setTimeout(() => {
    perfilImg2.src = isPerson2
      ? "Imagens/filtro.svg"
      : "Imagens/close.svg";
    perfilImg2.style.opacity = 1;
  }, 200); // Tempo de transição em milissegundos
});