'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('krs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mhs: {
        type: Sequelize.INTEGER
      },
      id_matkul: {
        type: Sequelize.INTEGER
      },
      semester: {
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
    await queryInterface.dropTable('krs');
  }
};