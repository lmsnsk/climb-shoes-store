"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      //   // define association here
    }
  }

  Order.init(
    {
      products: DataTypes.STRING,
      owner: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
