// Bonus 1

const countStundentPerLesson = lesson => {
  return (Object.entries(allLessons)
    .filter(([_, val]) => val.materia === lesson)
    .reduce((acc, [_, val]) => acc + val.numeroEstudantes, 0));
}

console.log(countStundentPerLesson('Matemática'));

// Bonus 2

const createReport = (obj, professor) => {
  const report = {
    professor,
    aulas: [],
    estudantes: 0
  }

  Object.entries(obj)
    .filter(([_, value]) => value.professor === professor)
    .map(([_, value]) => value)
    .forEach(obj => {
      report.aulas.push(obj.materia);
      report.estudantes += obj.numeroEstudantes;
    })

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))
console.log(createReport(allLessons, 'Carlos'))
