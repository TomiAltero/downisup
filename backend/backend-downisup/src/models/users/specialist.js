const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');
const Specialities = require('../specialists/specialities');
const Usuario = require('./usuario');

class Specialist extends Model {}

Specialist.init(
  {
    usuarioId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    specialityId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Specialist',
    tableName: 'Specialist',
    timestamps: true,
  }
);

Specialist.belongsTo(Specialities, {
    foreignKey: 'specialityId',
    as: 'Speciality',
})
Specialist.hasOne(Usuario, {
    foreignKey: 'usuarioId',
    as: 'Usuario',
    }
)

module.exports = Usuario;

