import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import user from "../routes/user";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("../models/User");
require("./passport");
user(app);
app.use(user);

app.use(function(
  err: express.ErrorRequestHandler,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).send({
      status: "error",
      data: {
        error: "Invalid token."
      }
    });
  }
  next();
});

export default app;
