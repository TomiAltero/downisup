const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class PsychologicalTherapies extends Model {}

PsychologicalTherapies.init(
  {
    idHijo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    objetivos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "PsychologicalTherapies",
    tableName: "psychological_therapies",
    timestamps: false,
  }
);

PsychologicalTherapies.associate = (models) => {
  PsychologicalTherapies.belongsTo(models.Hijo, {
    foreignKey: "idHijo",
    as: "hijo",
  });
};

module.exports = PsychologicalTherapies;

