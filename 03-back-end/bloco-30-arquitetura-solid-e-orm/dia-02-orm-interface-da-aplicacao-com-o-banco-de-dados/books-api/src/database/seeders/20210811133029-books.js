module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Title 1',
        author: 'Author 1',
        page_quantity: 100,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Title 2',
        author: 'Author 2',
        page_quantity: 200,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  down: async (queryInterface) => {
    queryInterface.bulkDelete('Books', null, {});
  },
};
