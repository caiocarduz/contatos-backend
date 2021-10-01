'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'telefones',
      {
          id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
          numero: Sequelize.STRING(25),
          contatos_id: Sequelize.INTEGER(),
      },
      /**,
       * Add altering commands here.
       *
       * Example:
       * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
      )
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('telefones');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
