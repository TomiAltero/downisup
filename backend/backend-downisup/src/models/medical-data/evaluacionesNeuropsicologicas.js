const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

EvaluacionesNeuropsicologicas.init(
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
    modelName: "EvaluacionesNeuropsicologicas",
    tableName: "evaluaciones_neuropsicologicas",
    timestamps: false,
  },
);

EvaluacionesNeuropsicologicas.associate = (models) => {
  EvaluacionesNeuropsicologicas.belongsTo(models.Hijo, {
    foreignKey: "hijoId",
    as: "hijo",
  });
};
