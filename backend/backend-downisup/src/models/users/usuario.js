const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');
const Specialities = require('../specialists/specialities');

class Usuario extends Model {}

Usuario.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipoUsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    specialityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    timestamps: true,
  }
);

Usuario.belongsTo(Specialities, {
  foreignKey: 'specialityId',
  as: 'Speciality',
})

module.exports = Usuario;

