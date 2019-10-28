import UserController from "../controllers/userController";
import ProviderController from "../controllers/providerController";
import Validator from "./validator";
import { Express } from "express";
import { auth } from "./auth";

const controller = new UserController();
const providercontroller = new ProviderController();
const validator = new Validator();

export default (app: Express) => {
  app.post("/login", auth.optional, validator.loginValidator, controller.login);

  app.post("/logout", auth.required, controller.logout);

  app.post(
    "/user",
    auth.optional,
    validator.registerUserValidator,
    controller.registerUser
  );

  app.put("/user/:id", auth.required, controller.updateUser);

  app.get("/user/:id", auth.required, controller.getUser);

  app.get("/search-services/:search*?", auth.optional, providercontroller.searchServices);
};
