'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matakuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      matakuliah.belongsTo(models.dosen, {foreignKey: "id_dosen", as: "dosen"});
      matakuliah.hasMany(models.krs, {foreignKey: "id_matkul", as: "krs"});
    }
  }
  matakuliah.init({
    nama: DataTypes.STRING,
    sks: DataTypes.INTEGER,
    id_dosen: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'matakuliah',
  });
  return matakuliah;
};