'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'contatos',
      {
        nome:  Sequelize.STRING(),
        email: Sequelize.STRING(),
        usuarios_id: { type: Sequelize.INTEGER, references: {
          model: "usuarios",
          key: 'id'
        }}
      }
    )
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contatos');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
