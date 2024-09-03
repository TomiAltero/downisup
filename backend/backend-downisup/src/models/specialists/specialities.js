const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');
const Usuario = require('../users/usuario');

class Specialities extends Model {}

Specialities.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Speciality',
    tableName: 'specialities',
    timestamps: false,
  }
);

Specialities.associate = (models) => {
Specialities.hasMany(Usuario, {
  foreignKey: 'specialityId',
  as: 'Usuarios',
});};

module.exports = Specialities;

