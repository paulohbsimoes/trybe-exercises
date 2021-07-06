/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

/* Coletar notas */
const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade),
});

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
});

/* "Determinar" */
const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/* Exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

/*
  Vamos exportar também nossa nova função de `Coletar notas` para testes
*/
module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};
