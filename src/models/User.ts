import { Schema } from "mongoose";
import * as Provider from "./Provider";
import * as jwt from "jsonwebtoken";
const bcrypt = require("bcryptjs");
import environment from "../config/environment";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
      select: true
    },
    lastname: {
      type: String,
      required: [true, "lastname is required."],
      select: true
    },
    email: {
      type: String,
      required: [true, "email is required."],
      unique: [true, "user already exists."],
      select: true
    },
    password: {
      type: String,
      required: [true, "password is required."],
      select: false
    },
    avatar: {
      type: String,
      select: true
    },
    cpf: {
      type: String,
      select: true
    },
    gender: {
      type: String,
      enum: ["female", "male", "other"],
      select: true
    },
    phone: {
      type: String,
      select: true
    },
    // address: {
    //   //fazer
    // },
    // payment_info: {
    //   //fazer
    // },
    provider: {
      type: Provider,
      select: true
    }
  },
  {
    timestamps: true
  }
);

userSchema.methods.setPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(environment.SALT_ROUNDS);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

userSchema.methods.validatePassword = (
  passwordLogin: string,
  passwordModel: string
) => {
  return bcrypt.compareSync(passwordLogin, passwordModel);
};

userSchema.methods.generateJWT = function() {
  return jwt.sign(
    {
      email: this.email,
      id: this._id
    },
    environment.JWT_ENCRYPTION,
    { expiresIn: environment.JWT_EXPIRATION }
  );
};

userSchema.methods.toAuthJSON = function() {
  return {
    id: this._id,
    name: this.name,
    lastname: this.lastname,
    email: this.email,
    avatar: this.avatar,
    isProvider: this.provider ? true : false,
    token: this.generateJWT()
  };
};

export = userSchema;
