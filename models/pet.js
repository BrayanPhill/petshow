'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    
    static associate(models) {}
  }
  Pet.init({
    nome: DataTypes.STRING,
    especie: DataTypes.STRING,
    raca: DataTypes.STRING,
    anos: DataTypes.STRING,
    vacinas: DataTypes.STRING,
    dono: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};