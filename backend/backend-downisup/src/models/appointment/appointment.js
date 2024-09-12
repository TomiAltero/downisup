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

    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    EndTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    solicitationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    stateName: {
      type: DataTypes.STRING,
      allowNull: false,
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


