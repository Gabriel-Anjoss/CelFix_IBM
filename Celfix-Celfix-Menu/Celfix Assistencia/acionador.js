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







let carousel1Index = 0;
let carousel2Index = 0;
let carousel2AdvanceCount = 0;
let canAdvanceCarousel2 = false;

const carousel1Images = document.querySelectorAll(".container-slider .slider");
const carousel2Images = document.querySelectorAll(".container-slider2 .slider2");

function updateCarousel1() {
    for (let i = 0; i < carousel1Images.length; i++) {
        carousel1Images[i].classList.remove("on");
    }
    carousel1Images[carousel1Index].classList.add("on");
    canAdvanceCarousel2 = true;
}

function updateCarousel2() {
    for (let i = 0; i < carousel2Images.length; i++) {
        carousel2Images[i].classList.remove("on2");
    }
    carousel2Images[carousel2Index].classList.add("on2");
}

function advanceCarousel1() {
    carousel1Index = (carousel1Index + 1) % carousel1Images.length;
    updateCarousel1();

    if (canAdvanceCarousel2) {
        advanceCarousel2();
    }
}

function retreatCarousel1() {
    carousel1Index = (carousel1Index - 1 + carousel1Images.length) % carousel1Images.length;
    updateCarousel1();
    canAdvanceCarousel2 = true;
    retreatCarousel2();
}

function advanceCarousel2() {
    if (canAdvanceCarousel2) {
        carousel2Index = (carousel2Index + 1) % carousel2Images.length;
        updateCarousel2();
        carousel2AdvanceCount++;
        if (carousel2AdvanceCount >= 4) {
            canAdvanceCarousel2 = false;
        }
    }
}

function retreatCarousel2() {
    if (carousel2Index > 0) {
        carousel2Index = (carousel2Index - 1 + carousel2Images.length) % carousel2Images.length;
        updateCarousel2();
    }
}

// Event listeners for buttons
document.getElementById("next-button").addEventListener("click", advanceCarousel1);
document.getElementById("prev-button").addEventListener("click", retreatCarousel1);
document.getElementById("next-button2").addEventListener("click", advanceCarousel2);
document.getElementById("prev-button2").addEventListener("click", retreatCarousel2);









const botoes = document.querySelectorAll('.meu-botão');
let botaoAumentado = null;

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    if (botaoAumentado) {
      botaoAumentado.style.transform = 'scale(1)';
    }
    if (botao !== botaoAumentado) {
      botao.style.transform = 'scale(1.2)';
      botaoAumentado = botao;
    } else {
      botaoAumentado = null;
    }
  });
});
