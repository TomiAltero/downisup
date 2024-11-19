const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');
const Specialist = require('../users/specialist');
class Availability extends Model {}

Availability.init(
  {
    specialistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    day: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Availability',
    tableName: 'Availability',
    timestamps: true,
  }
);
Availability.hasOne(Specialist, {
    foreignKey: 'specialistId',
    as: 'Specialist',
    }
)

module.exports = Usuario;

