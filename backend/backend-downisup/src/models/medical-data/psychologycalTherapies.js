const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class PsychologicalTherapies extends Model {}

PsychologicalTherapies.init(
  {
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
    modelName: "PsychologicalTherapies",
    tableName: "psychologhycal_therapie",
    timestamps: false,
  }
);

PsychologicalTherapies.associate = (models) => {
  PsychologicalTherapies.belongsTo(models.Usuario, {
    foreignKey: "idUsuario",
    as: "Usuario",
  });

  PsychologicalTherapies.belongsTo(models.Hijo, {
    foreignKey: "idHijo",
    as: "Hijos",
  });
};

module.exports = PsychologicalTherapies;

