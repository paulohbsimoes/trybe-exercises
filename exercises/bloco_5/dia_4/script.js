const textContainer = document.querySelector('#texto');

const settings = {
  backgroundColor: 'orange',
  textColor: 'red',
  fontSize: '15px',
  lineHeight: '25px',
  fontFamily: 'sans-serif'
}

function config() {
  for (let key in settings) {
    textContainer.style[key] = settings[key];
  }
}

config();

function setConfig(key, val) {
  localStorage[key] = val;
}

function getConfig(key) {
  return localStorage[key];
}

const preferencias = document.querySelector('#preferencias');

preferencias.addEventListener('click', function(event) {
  event.stopPropagation();
})

document.addEventListener('click', (event) => {
  preferencias.classList.remove('active-settings');
});

const settingsButton = document.querySelector('#preferencias span');
settingsButton.addEventListener('click', (event) => {
  event.stopPropagation();
  preferencias.classList.toggle('active-settings');
});

const corDeFundo = document.getElementById('cor-de-fundo');
corDeFundo.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    textContainer.style.backgroundColor = corDeFundo.value;
    corDeFundo.value = '';
  }
});

const corDeTexto = document.getElementById('cor-de-texto');
corDeTexto.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    textContainer.style.color = corDeTexto.value;
    corDeTexto.value = '';
  }
});

const tamanhoDaFonte = document.getElementById('tamanho-da-fonte');
tamanhoDaFonte.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    textContainer.style.fontSize = tamanhoDaFonte.value;
    tamanhoDaFonte.value = '';
  }
});

const espacamentoEntreLinhas = document.getElementById('espacamento-entre-linhas');
espacamentoEntreLinhas.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    textContainer.style.lineHeight = espacamentoEntreLinhas.value;
    espacamentoEntreLinhas.value = '';
  }
});

const tipoDeFonte = document.getElementById('tipo-de-fonte');
tipoDeFonte.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    textContainer.style.fontFamily = tipoDeFonte.value;
    tipoDeFonte.value = '';
  }
});

console.log(corDeFundo);
console.log(corDeTexto);
console.log(tamanhoDaFonte);
console.log(espacamentoEntreLinhas);
console.log(tipoDeFonte);