"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      //   // define association here
    }
  }

  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      vendor: DataTypes.STRING,
      sizes: DataTypes.STRING,
      vendorInfo: DataTypes.STRING,
      price: DataTypes.INTEGER,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
