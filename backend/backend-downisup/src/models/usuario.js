const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Usuario extends Model {}

Usuario.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true, // Cambiado a true para que los usuarios de Google no necesiten username
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Cambiado a true para que los usuarios de Google no necesiten password
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
      allowNull: true, // Cambiado a true para que los usuarios de Google no necesiten dni
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipoUsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    authProvider: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "local", // "local" para registros manuales, "google" para registros con Google
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    tableName: "Usuarios",
    timestamps: true,
  }
);

module.exports = Usuario;
