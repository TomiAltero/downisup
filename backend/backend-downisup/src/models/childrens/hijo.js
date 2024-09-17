const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");
const PsychologycalTherapies = require('../medical-data/psychologycalTherapies');
const speechTherapies = require('../medical-data/speechTherapies');
const PhysiologicalTherapies = require('../medical-data/physiologycalTherapies');
const NeurologicalTherapies = require("../medical-data/neurologicalTherapies");
const Appointment = require('../appointment/appointment');

class Hijo extends Model {}

Hijo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Hijo",
    tableName: "hijo",
    timestamps: true,
  }
);


Hijo.hasMany(PsychologycalTherapies, {
  foreignKey: "hijoId",
  as: "PsychologycalTherapies", 
});

Hijo.hasMany(speechTherapies, {
  foreignKey: "hijoId",
  as: "SpeechTherapies", 
});

Hijo.hasMany(PhysiologicalTherapies, {
  foreignKey: "hijoId",
  as: "PhysiologicalTherapies", 
});

Hijo.hasMany(NeurologicalTherapies, {
  foreignKey: "hijoId",
  as: "NeurologicalTherapies", 
});

Hijo.hasMany(Appointment, {
    foreignKey: 'hijoId',
    as: "Appointment"
})



module.exports = Hijo;

