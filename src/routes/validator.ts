import { Request, Response, NextFunction } from "express";

export default class Validator {
  public registerUserValidator = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {
      body: { name, lastname, email, password }
    } = req;
    if (name && lastname && email && password) {
      return next();
    }
    return res.status(400).send({
      status: "error",
      data: {
        error: "Invalid query parameter."
      }
    });
  };

  public loginValidator = (req: Request, res: Response, next: NextFunction) => {
    const {
      body: { email, password }
    } = req;
    if (email && password) {
      return next();
    }
    return res.status(400).send({
      status: "error",
      data: {
        error: "Invalid query parameter."
      }
    });
  };
}
