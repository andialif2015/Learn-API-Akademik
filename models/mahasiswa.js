'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mahasiswa.hasMany(models.krs, {foreignKey: "id_mhs", as: "krs"});
    }
  }
  mahasiswa.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mahasiswa',
  });
  return mahasiswa;
};