//MISMOS DATOS QUE EL SPEECH POR AHORA

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class NeurologistTherapies extends Model {}

NeurologistTherapies.init(
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
    modelName: "NeurologistTherapies",
    tableName: "neurologist_therapies",
    timestamps: false,
  }
);

NeurologistTherapies.associate = (models) => {
  NeurologistTherapies.belongsTo(models.Usuario, {
    foreignKey: "idUsuario",
    as: "Usuario",
  });

  NeurologistTherapies.belongsTo(models.Hijo, {
      foreignKey: "idHijo",
      as: "Hijos",
  });

};

module.exports = NeurologistTherapies;

