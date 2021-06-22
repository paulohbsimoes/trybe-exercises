const getRepos = require('../src/4-getRepos.js');

describe('', () => {
  it('should have the repositories "sd-01-week4-5-project-todo-list" and "sd-01-week4-5-project-meme-generator" on the list when called with the URL "https://api.github.com/users/tryber/repos"', async () => {
    return getRepos('https://api.github.com/users/tryber/repos').then(data => {
      // Estes repositório não existem mais, portanto inverti a lógica do exercício.
      expect(data.find(repo => repo.name === 'sd-01-week4-5-project-todo-list')).toBeUndefined();
      expect(data.find(repo => repo.name === 'sd-01-week4-5-project-meme-generator')).toBeUndefined();
    })
  });
});
