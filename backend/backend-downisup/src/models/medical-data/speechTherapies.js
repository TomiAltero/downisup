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
    }
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
    as: "usuario",
  });
  SpeechTherapies.belongsTo(models.Hijo, {
    foreignKey: "idHijo",
    as: "hijo",
  });
};

module.exports = SpeechTherapies;

