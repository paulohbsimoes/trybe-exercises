function techList(technologies, name) {
  if (technologies.length === 0) return 'Vazio!'
  technologies.sort();
  return technologies.map(technology => ({ name, tech: technology }));
}

module.exports = techList;
