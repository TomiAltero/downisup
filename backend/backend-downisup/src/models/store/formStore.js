const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class FormStore extends Model {}

FormStore.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [7, 15],
      },
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
  },
  {
    sequelize,
    modelName: "FormStore",
    tableName: "formstores",
    timestamps: false,
  },
);

module.exports = FormStore;
