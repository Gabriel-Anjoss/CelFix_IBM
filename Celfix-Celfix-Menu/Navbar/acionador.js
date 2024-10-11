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

    //Segredo
const menus = document.querySelector(".menu-perfil .menu");
const nav = document.querySelector(".navbar");

menus.addEventListener("click", () => nav.classList.toggle("active"));

const elementoAlvo = document.querySelector('.fotoperfil');
const elementoModificar = document.querySelector('.boneco');

    if (elementoAlvo.style.display === 'flex') {
        elementoModificar.style.opacity = 1; // Restaura a opacidade
    }
    else {
        elementoModificar.style.opacity = 0; // Reduz a opacidade para 0
    }

    //Filtro da pesquisa
const ul = document.querySelector('.list');
    sugestoes.forEach((item)=> {
        const li = document.createElement("li");
        li.innerHTML = `<li><a><img src="../Imagens/search.svg"><span class="item-span">${item}</span></a></li>`;
        ul.appendChild(li);
    })

function filtrar() {
  var input, filter, ul, li, a, i, txtValue, allList, span, count = 0;

  input = document.querySelector('.search-box');
  ul = document.querySelector('.list');
  filter = input.value.toUpperCase();
  li = ul.getElementsByTagName("li");
  allList = li;

  for(i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    
    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      count++;
      span = li[i].querySelector('.item-span');

      if(span) {
        span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match)=> {
          return "<strong>" + match + "</strong>";
        });
      }
    }
    else {
      li[i].style.display = "none";
    }
  }
  if(count == 0) {
    ul.style.display = "none";
  }
  else {
    ul.style.display = "block";
  }
  if(filter == "") {
    ul.style.display = "none";
  }
  for (i = 0; i < allList.length; i++) {
    allList[i].setAttribute('onclick', 'select(this)');
  }
}

function select(element) {
  let selectData = element.textContent;
  input.value = selectData;
}

const input = document.querySelector('.search-box');
const search = document.querySelector('.search');

  // Adicione um listener para o evento 'input'
  input.addEventListener('input', function() {
      // Verifique se o campo está vazio ou não
      if (input.value.trim() === '') {
          // Se estiver vazio, remova a classe 'active'
          search.classList.remove('active');
      } else {
          // Se tiver algo escrito, adicione a classe 'active'
          search.classList.add('active');
      }
  });

//reconhecimento de voz

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const voiceBtn = document.getElementById('voiceBtn');

  // Verifica se o navegador suporta reconhecimento de fala
  if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();

      recognition.onresult = (event) => {
          const result = event.results[0][0].transcript;
          searchInput.value = result;
      };

      voiceBtn.addEventListener('click', () => {
          recognition.start();
      });
  } else {
      alert('O seu navegador não suporta reconhecimento de fala.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const voiceBtn = document.getElementById('voiceBtn');
  let recognitionActive = false;
   // Adiciona um ouvinte de clique ao botão
   voiceBtn.addEventListener('click', function () {
    if (!recognitionActive) {
      
      recognitionActive = true;
    } else {
      
      recognitionActive = false;
    }

    voiceBtn.classList.toggle('active', recognitionActive);
  });
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