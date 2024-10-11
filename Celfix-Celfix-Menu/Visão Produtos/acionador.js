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



//parte cassio

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

//frete
function exibirFormulario() {
  // Exibir o fundo semi-transparente e o formulário
  document.getElementById("freteBackground").style.display = "flex";
  document.getElementById("freteForm").style.display = "flex";
}

function fecharFormulario() {
  // Fechar o fundo semi-transparente e o formulário
  document.getElementById("freteBackground").style.display = "none";
  document.getElementById("freteForm").style.display = "none";
}

function calcularFrete() {
  // Lógica de cálculo de frete (pode ser implementada conforme necessário)
  var peso = 10;
  var destino = document.getElementById("destino").value;

  // Exemplo simples: Valor fixo de R$ 10 por quilo
  var valorFrete = peso * 10;

  // Exibir o resultado na página
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `O frete para ${destino} é de R$ ${valorFrete.toFixed(2)}.`;
}