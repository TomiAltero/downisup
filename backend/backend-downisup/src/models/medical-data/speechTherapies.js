const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class SpeechTherapies extends Model {}

SpeechTherapies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    objetives: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    observations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuarios", 
        key: "id", 
      },
    },

  },
  {
    sequelize,
    modelName: "SpeechTherapies",
    tableName: "speech_therapies",
    timestamps: false,
  }
);

SpeechTherapies.associate = (models) => {
  SpeechTherapies.belongsTo(models.Usuario, {
    foreignKey: "idUsuario",
    as: "Usuario",
  });

  SpeechTherapies.belongsTo(models.Hijo, {
      foreignKey: "idHijo",
      as: "Hijos",
  });

};

module.exports = SpeechTherapies;

