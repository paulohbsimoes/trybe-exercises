// Tente criar uma função que exiba as habilidades do objeto student.
// Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".
// Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = student => {
  Object.keys(student).map(key => console.log(`${key}, ${student[key]}`));
}

console.log('Estudante 1');
listSkills(student1);

console.log('\nEstudante 2');
listSkills(student2);
