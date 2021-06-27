module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',
      [
        { name: 'Livro A', release_year: 2020, number_pages: 111 },
        { name: 'Livro B', release_year: 2019, number_pages: 222 },
        { name: 'Livro C', release_year: 2018, number_pages: 333 },
        { name: 'Livro D', release_year: 2017, number_pages: 444 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
