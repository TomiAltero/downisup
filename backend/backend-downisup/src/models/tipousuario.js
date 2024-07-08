const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Usuario = require("./usuario");

class TipoUsuario extends Model {}

TipoUsuario.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "TipoUsuario",
    tableName: "tipousuario",
    timestamps: false,
  },

  TipoUsuario.hasMany(Usuario, {
    foreignKey: "tipoUsuarioId",
    as: "Usuarios",
  }),
);
