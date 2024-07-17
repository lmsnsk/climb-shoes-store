const { Router } = require("express");
const controller = require("../controllers/controller.js");

const prefix = "/api/v1";
const router = Router();

router.post("/login", controller.login);
router.post("/signup", controller.registerUser);
router.get("/logout", controller.logout);
router.get("/products", controller.products);
router.get("/products/:id", controller.product);
router.get("/my-orders/:id", controller.myOrders);
router.post("/my-orders", controller.addMyOrders);
router.get("/cart/:id", controller.cart);
router.get("/remove-cart/:id", controller.removeMyCart);
router.post("/cart", controller.addToCart);
router.put("/cart", controller.updateCart);
router.delete("/cart", controller.removeCart);
router.get("/session-check", controller.checkSession);

const apiRouter = Router();
apiRouter.use(prefix, router);

module.exports = apiRouter;
