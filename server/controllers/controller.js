const UserService = require("../services/service");
const userService = new UserService();
const bcrypt = require("bcrypt");

module.exports = {
  async registerUser(req, res) {
    try {
      if (await userService.findUser(req.body.username)) {
        return res.status(409).send({ error: "User already exists" });
      }
      const user = await userService.create(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send({ error: `Failed to create user with cause: ${error}` });
    }
  },

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const user = await userService.findUser(username);

      if (!user) {
        return res.status(401).send({ error: "User does not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        req.session.user = {
          id: user.id,
          username: user.username,
        };
        req.session.isAuthenticated = true;

        return res.status(200).send({
          id: user.id,
          username: user.username,
        });
      } else {
        return res.status(401).send({ error: "Invalid username or password" });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: "Failed to login" });
    }
  },

  async logout(req, res) {
    if (!req.session.user) {
      return res.status(401).send({ error: "You are not logged in!" });
    }

    req.session.destroy();
    return res.status(200).send({ success: true });
  },

  async products(req, res) {
    try {
      const products = await userService.getProducts(false);
      if (!products) {
        return res.status(404).send({ error: "Products not found" });
      }
      return res.status(200).send(products);
    } catch (error) {
      res.status(400).send({ error });
    }
  },

  async product(req, res) {
    try {
      const product = await userService.getProduct(req.params.id);
      if (!product) {
        return res.status(404).send({ error: "Product not found" });
      }
      return res.status(200).send(product);
    } catch (error) {
      res.status(400).send({ error });
    }
  },

  async cart(req, res) {
    try {
      const products = await userService.getCart(+req.params.id);
      if (!products) {
        return res.status(404).send({ error: "Products not found" });
      }
      return res.status(200).send(products);
    } catch (error) {
      res.status(400).send({ error });
    }
  },

  async addToCart(req, res) {
    try {
      console.log(req.body);

      const element = await userService.createCartElement(req.body);
      res.status(201).send(element);
    } catch (error) {
      res.status(400).send({ error: `Failed to create cart element with cause: ${error}` });
    }
  },

  async updateCart(req, res) {
    try {
      const element = await userService.updateCartElement(req.body);
      return res.status(200).send(element);
    } catch (error) {
      res.status(400).send({ error: `Failed to update: ${error}` });
    }
  },

  async removeCart(req, res) {
    try {
      await userService.removeCartElement(req.body);
      return res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ error: `Failed to remove element: ${error}` });
    }
  },

  async removeMyCart(req, res) {
    try {
      await userService.removeAllCart(+req.params.id);
      return res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ error: `Failed to remove element: ${error}` });
    }
  },

  async myOrders(req, res) {
    try {
      const products = await userService.getOrders(+req.params.id);
      if (!products) {
        return res.status(404).send({ error: "Orders not found" });
      }
      return res.status(200).send(products);
    } catch (error) {
      res.status(400).send({ error });
    }
  },

  async addMyOrders(req, res) {
    try {
      const element = await userService.createOrder(req.body);
      res.status(201).send(element);
    } catch (error) {
      res.status(400).send({ error: `Failed to create order with cause: ${error}` });
    }
  },

  async checkSession(req, res) {
    if (!req.session || !req.session.user) {
      return res.status(401).send({ error: "You are not logged in!" });
    }
    return res.status(200).send(req.session.user);
  },
};
