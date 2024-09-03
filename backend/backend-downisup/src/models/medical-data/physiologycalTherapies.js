const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class PhysiologicalTherapies extends Model {}

PhysiologicalTherapies.init(
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
    modelName: "PhysiologicalTherapies",
    tableName: "physiological_therapies",
    timestamps: false,
  }
);

PhysiologicalTherapies.associate = (models) => {
  PhysiologicalTherapies.belongsTo(models.Usuario, {
    foreignKey: "idUsuario",
    as: "Usuario",
  });
  
  PhysiologicalTherapies.belongsTo(models.Hijo, {
    foreignKey: "idHijo",
    as: "Hijos",
  });
};

module.exports = PhysiologicalTherapies;

