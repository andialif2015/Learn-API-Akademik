'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class krs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      krs.belongsTo(models.mahasiswa,{foreignKey: "id_mhs", as: "mhs"});
      krs.belongsTo(models.matakuliah,{foreignKey: "id_matkul", as: "matkul"});
    }
  }
  krs.init({
    id_mhs: DataTypes.INTEGER,
    id_matkul: DataTypes.INTEGER,
    semester: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'krs',
  });
  return krs;
};