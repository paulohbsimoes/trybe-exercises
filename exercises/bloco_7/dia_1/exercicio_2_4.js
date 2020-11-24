const replaceX = (str, newValue) => str.replace('x', newValue);

console.log(replaceX('Tryber x aqui!', 'Bebeto'));

const skills = ['Disciplina', 'Foco', 'Persistência', 'Trabalho em equipe', 'Javascript'];

console.log(`
${replaceX('Tryber x aqui!', 'Paulo')}
Minhas cinco principais habilidades são:
${skills.sort().map(cur => `  * ${cur}`).join('\n')}
#goTrybe
`);
