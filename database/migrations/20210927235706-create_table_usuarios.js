'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuarios',
      {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nome:  Sequelize.STRING(45),
        email: Sequelize.STRING(45),
        senha: Sequelize.STRING(256)
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
    return queryInterface.dropTable('usuarios');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
