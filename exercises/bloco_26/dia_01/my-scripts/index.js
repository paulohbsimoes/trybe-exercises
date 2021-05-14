const readline = require('readline-sync');

const options = ['imc', 'velocidade', 'sorteio']
const menu = `Qual script deseja executar? (${options.join(',')}): `;
const choice = readline.question(menu);

if (!options.includes(choice)) return;

require(`./${choice}`);
