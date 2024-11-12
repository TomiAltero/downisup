const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Products extends Model {}

Products.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,

      validate: {
        isDecimal: true,
        min: 0,
      },
    },
  },
  {
    sequelize,
    modelName: "Products",
    tableName: "products",
    timestamps: false,
  },
);

module.exports = Products;
