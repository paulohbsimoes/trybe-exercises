module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Bárbara',
          last_name: 'Silva',
          age: 16,
        },
        {
          first_name: 'Carlos',
          last_name: 'Santos',
          age: 24,
        },
        {
          first_name: 'Danilo',
          last_name: 'Henrique',
          age: 32,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
