const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

ActividadesFisicas.init(
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
    modelName: "ActividadesFisicas",
    tableName: "actividades_fisicas",
    timestamps: false,
  },
);

ActividadesFisicas.associate = (models) => {
  ActividadesFisicas.belongsTo(models.Hijo, {
    foreignKey: "hijoId",
    as: "hijo",
  });
};
