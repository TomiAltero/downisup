const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class NeurologicalTherapies extends Model {}

NeurologicalTherapies.init(
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
    objectives: {
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
    modelName: "NeurologicalTherapies",
    tableName: "neurological_therapie",
    timestamps: false,
  }
);

NeurologicalTherapies.associate = (models) => {
  NeurologicalTherapies.belongsTo(models.Usuario, {
    foreignKey: "idUsuario",
    as: "Usuario",
  });
  
  NeurologicalTherapies.belongsTo(models.Hijo, {
    foreignKey: "idHijo",
    as: "Hijos",
  });
};

module.exports = NeurologicalTherapies;

