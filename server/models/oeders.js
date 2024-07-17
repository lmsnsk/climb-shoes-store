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
      itemsTitle: DataTypes.STRING,
      owner: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      deliveryAddress: DataTypes.STRING,
      deliveryDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
