const {DataTypes, Model} = require("sequelize");
const sequelize = require("../../config/database");

class Appointment extends Model {}


Appointment.init(
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

    beginHour: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    endHour: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    requestDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    idHijo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Hijos", 
        key: "id", 
      },
    },
    idUsuarioPadre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Usuarios", 
        key: "id", 
      },
    },

    idUsuarioEspecialista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Usuarios", 
        key: "id", 
      },
    },
  },
  {
    sequelize,
    modelName: "Appointment",
    tableName: "appointment",
    timestamps: false,
  }
);

Appointment.associate = (models) => {
  Appointment.belongsTo(models.Usuario, {
    foreignKey: "idUsuario",
    as: "Usuario",
  });
  
  Appointment.belongsTo(models.Hijo, {
    foreignKey: "idHijo",
    as: "Hijos",
  });

};

module.exports = Appointment;


