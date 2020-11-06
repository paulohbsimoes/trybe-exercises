const textContainer = document.querySelector('#texto');

const initialSettings = {
  backgroundColor: 'orange',
  color: 'white',
  fontSize: '15px',
  lineHeight: '25px',
  fontFamily: 'sans-serif'
}

const settings = localStorage.settings ? JSON.parse(localStorage.settings) : initialSettings;

function updateConfigs() {
  for (let cur in settings) {
    textContainer.style[cur] = settings[cur];
  }
}

updateConfigs();

function setConfig(key, val) {
  settings[key] = val;
  updateConfigs();
  localStorage.setItem('settings', JSON.stringify(settings));
}

const preferencias = document.querySelector('#preferencias');

preferencias.addEventListener('click', function (event) {
  event.stopPropagation();
})

document.addEventListener('click', (event) => {
  preferencias.classList.remove('active-settings');
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') preferencias.classList.remove('active-settings');
});

const settingsButton = document.querySelector('#preferencias span');
settingsButton.addEventListener('click', (event) => {
  event.stopPropagation();
  preferencias.classList.toggle('active-settings');
});

const corDeFundo = document.getElementById('cor-de-fundo');
corDeFundo.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    textContainer.style.backgroundColor = corDeFundo.value;
    setConfig('backgroundColor', corDeFundo.value);
    corDeFundo.value = '';
  }
});

const corDeTexto = document.getElementById('cor-de-texto');
corDeTexto.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    textContainer.style.color = corDeTexto.value;
    setConfig('color', corDeTexto.value);
    corDeTexto.value = '';
  }
});

const tamanhoDaFonte = document.getElementById('tamanho-da-fonte');
tamanhoDaFonte.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    textContainer.style.fontSize = tamanhoDaFonte.value;
    setConfig('fontSize', tamanhoDaFonte.value);
    tamanhoDaFonte.value = '';
  }
});

const espacamentoEntreLinhas = document.getElementById('espacamento-entre-linhas');
espacamentoEntreLinhas.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    textContainer.style.lineHeight = espacamentoEntreLinhas.value;
    setConfig('lineHeight', espacamentoEntreLinhas.value);
    espacamentoEntreLinhas.value = '';
  }
});

const tipoDeFonte = document.getElementById('tipo-de-fonte');
tipoDeFonte.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    textContainer.style.fontFamily = tipoDeFonte.value;
    setConfig('fontFamily', tipoDeFonte.value);
    tipoDeFonte.value = '';
  }
});