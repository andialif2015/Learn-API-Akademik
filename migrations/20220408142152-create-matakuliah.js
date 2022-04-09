'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matakuliahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      sks: {
        type: Sequelize.INTEGER
      },
      id_dosen: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matakuliahs');
  }
};