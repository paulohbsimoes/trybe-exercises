function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holidays = [24, 25, 31];

const ulDays = document.getElementById('days');

for (let index = 0; index < dezDaysList.length; index++) {
  const day = dezDaysList[index];

  const li = document.createElement('li');

  li.className = 'day';
  if (holidays.includes(day)) li.classList.add('holiday');
  if ((index + 2) % 7 === 0) li.classList.add('friday');

  li.textContent = day;
  ulDays.appendChild(li);
}

// Exercício 2

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

const feriadosButton = createButton('Feriados');
feriadosButton.id = 'btn-holiday';

const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.appendChild(feriadosButton);

// Exercício 3

let toggleFeriados = false;

function destacarFeriados() {
  toggleFeriados = !toggleFeriados;
  const dias = Array.from(ulDays.children);
  const feriados = dias.filter(dia => holidays.includes(parseInt(dia.textContent)));

  for (let dia of feriados) {
    if (toggleFeriados) {
      dia.style.backgroundColor = 'rgba(255,255,0, 0.3)';
    } else {
      dia.style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

feriadosButton.addEventListener('click', destacarFeriados);

// Exercício 4

const fridayButton = createButton('Sexta-feira');
fridayButton.id = 'btn-friday';
buttonsContainer.appendChild(fridayButton);

// Exercício 5

let toggleSextaFeira = false;

function mudaTextoSextaFeira() {
  toggleSextaFeira = !toggleSextaFeira;
  const dias = Array.from(ulDays.children);
  for (let i = 0; i < dias.length; i++) {
    const dia = dias[i];
    if ((i + 2) % 7 === 0) {
      if (toggleSextaFeira) {
        dia.textContent = 'Sextou!';
      } else {
        dia.textContent = parseInt(dia.previousElementSibling.textContent) + 1;
      }
    }
  }
}

fridayButton.addEventListener('click', mudaTextoSextaFeira);

// Exercício 6

const listItems = ulDays.querySelectorAll('li');
listItems.forEach(item => {
  item.addEventListener('mouseenter', zoomIn);
  item.addEventListener('mouseout', zoomOut);
})

function zoomIn(event) {
  event.target.style.transform = 'scale(2)';
}

function zoomOut(event) {
  event.target.style.transform = 'scale(1)';
}


// Exercício 7

const myTasks = document.querySelector('.my-tasks');

function createTask(description, color) {
  const taskWrapper = document.createElement('span');
  taskWrapper.className = 'task-wrapper';

  const taskDescription = document.createElement('span');
  taskDescription.textContent = description;

  const taskLabel = createLabel(color);

  taskWrapper.appendChild(taskDescription);
  taskWrapper.appendChild(taskLabel);
  myTasks.appendChild(taskWrapper);
}

// Exercício 8

function createLabel(color) {
  const label = document.createElement('div');
  label.className = 'task';
  label.style.backgroundColor = color;
  return label;
}