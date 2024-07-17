const { User, Product, Cart, Order } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 12;

class UserService {
  async create(user) {
    const { username } = user;
    let { password } = user;
    password = bcrypt.hashSync(password, saltRounds);

    try {
      return await User.create({ username, password });
    } catch (error) {
      console.log(error);
      new Error(`User creation failed: ${error}`);
    }
  }

  async findUser(username) {
    try {
      return await User.findOne({ where: { username: username } });
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to get user by username: ${error.message}`);
    }
  }

  async getProducts() {
    try {
      let products = await Product.findAll({
        attributes: ["title", "price", "id", "photo"],
      });
      return products;
    } catch (error) {
      throw new Error(`Failed to get products: ${error.message}`);
    }
  }

  async getProduct(id) {
    try {
      return await Product.findOne({ where: { id: id } });
    } catch (error) {
      throw new Error(`Failed to get product: ${error.message}`);
    }
  }

  async getCart(owner) {
    try {
      const response = await Cart.findAll({ where: { owner: owner } });
      return response;
    } catch (error) {
      throw new Error(`Failed to get products: ${error.message}`);
    }
  }

  async createCartElement(element) {
    const { owner, productId, count } = element;
    try {
      return await Cart.create({ owner, productId, count });
    } catch (error) {
      console.log(error);
      new Error(`User creation failed: ${error}`);
    }
  }

  async updateCartElement({ id, count, owner }) {
    try {
      const cartElement = await Cart.findOne({
        where: { productId: id, owner: owner },
      });
      cartElement.count = count;
      cartElement.save();
      return { count: count, id: id, owner: owner };
    } catch (error) {
      console.log(error);
      new Error(`Update failed: ${error}`);
    }
  }

  async removeCartElement({ id, owner }) {
    try {
      const cartElement = await Cart.findOne({
        where: { productId: id, owner: owner },
      });
      await Cart.destroy({
        where: { productId: id, owner: owner },
      });
      return cartElement.count;
    } catch (error) {
      throw new Error(`Failed to get product: ${error.message}`);
    }
  }

  async removeAllCart(owner) {
    try {
      return await Cart.destroy({
        where: { owner: owner },
      });
    } catch (error) {
      throw new Error(`Failed to get product: ${error.message}`);
    }
  }

  async createOrder(element) {
    const { products, owner, status, address, date, totalPrice } = element;
    try {
      return await Order.create({
        products,
        owner,
        status,
        address,
        date,
        totalPrice,
      });
    } catch (error) {
      console.log(error);
      new Error(`Order creation failed: ${error}`);
    }
  }

  async getOrders(owner) {
    try {
      const response = await Order.findAll({ where: { owner: owner } });
      return response;
    } catch (error) {
      throw new Error(`Failed to get orders: ${error.message}`);
    }
  }
}

module.exports = UserService;
