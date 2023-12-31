// dung de viet nhung file dieu huong thong thuong
import express from "express";
import homeController from "../controller/homeController.js";
const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  //path, handler
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.handleUserPage);
  router.post("/users/create-user", homeController.handleCreateNewUser);

  return app.use("/", router);
};

export default initWebRoutes;
