const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');
const Specialist = require('../users/specialist');

class Schedule extends Model {}

Schedule.init(
    {
    specialistId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    startHour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endHour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        sequelize,
        modelName: 'Specialist',
        tableName: 'Specialist',
        timestamps: true,
    },
    
);


Availability.hasOne(Specialist, {
    foreignKey: 'specialistId',
    as: 'Specialist',
    }
)

module.exports = Usuario;

