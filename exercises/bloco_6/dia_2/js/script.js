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
      if (estado.nome === 'Espírito Santo') newEstado.selected = "selected";
      selectEstados.appendChild(newEstado);
    }
  });

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

  if (!validation.isValid()) return;

  const fields = Array.from(new FormData(form));
  for (let pair of fields) {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList = 'mb-4';

    const fieldLabel = document.createElement('dt');
    fieldLabel.textContent = formatLabel(pair[0]);

    const fieldValue = document.createElement('dd');
    fieldValue.textContent = pair[1];

    fieldWrapper.appendChild(fieldLabel);
    fieldWrapper.appendChild(fieldValue);
    previewDl.appendChild(fieldWrapper);
  }

  form.classList.add('d-none');
  previewContainer.classList.remove('d-none');
});

const picker = new Pikaday({
  field: document.querySelector('[name=data-de-inicio]'),
  format: 'DD/MM/YYYY'
});

validation.init('#myForm');