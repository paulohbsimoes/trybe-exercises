const previewButton = document.getElementById('preview-button');
const selectEstados = document.getElementById('estado');
const form = document.querySelector('form');
const previewContainer = document.querySelector('.preview-container');
const previewDl = document.querySelector('.preview-dl')

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then(res => res.json())
  .then(estados => {
    for (let estado of estados) {
      const newEstado = document.createElement('option');
      newEstado.value = estado.nome;
      newEstado.textContent = estado.nome;
      selectEstados.appendChild(newEstado);
    }
  });

function validateDate(date) {
  if (!/^(\d{2}\/){2}\d{4}$/.test(date)) return false;
  const day = parseInt(date.slice(0, 2))
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, 11));
  if (day <= 0 || day > 31 ||
    month <= 0 || month > 12 ||
    year <= 0) return false;
  return true;
}

const startDate = document.getElementById('data-de-inicio');
startDate.addEventListener('change', function (event) {
  const date = event.target.value;
  if (!validateDate(date)) {
    alert('A data inserida é inválida.');
    event.target.value = '';
  }
})

function checkRequired() {
  const requiredFields = form.querySelectorAll('[required]');
  for (let index = 0; index < requiredFields.length; index += 1) {
    const field = requiredFields[index];
    if (!field.checkValidity()) return false;
  }
  return true;
}

function formatLabel(label) {
  let result = label.replaceAll('-', ' ');
  result = result.replace(/^\w/, cur => cur.toUpperCase());
  return result;
}

previewButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (!checkRequired()) {
    alert('Não preencheu todos os campos obrigatórios.');
    return;
  }

  const fields = Array.from(new FormData(form));
  for (let pair of fields) {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList = 'field-wrapper';

    const fieldLabel = document.createElement('dt');
    fieldLabel.className = 'field-label';
    fieldLabel.textContent = formatLabel(pair[0]);

    const fieldValue = document.createElement('dd');
    fieldValue.className = 'field-value';
    fieldValue.textContent = pair[1];

    fieldWrapper.appendChild(fieldLabel);
    fieldWrapper.appendChild(fieldValue);

    previewDl.appendChild(fieldWrapper);
  }

  form.style.display = 'none';
  previewContainer.style.display = 'block';
});

function getRandomNumber(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

function getRandomString() {
  let strLength = 20 + getRandomNumber(100);
  let str = '';
  for (let index = 0; index < strLength; index += 1) {
    const charCode = 65 + getRandomNumber(25);
    const ch = String.fromCharCode(charCode);
    str += Math.random() < 0.5 ? ch : ch.toLowerCase();
  }
  return str;
}

function randomData() {
  const requiredFields = form.querySelectorAll('[required]');
  for (let index = 0; index < requiredFields.length; index += 1) {
    const field = requiredFields[index];
    field.value = getRandomString();
  }
}

// randomData();