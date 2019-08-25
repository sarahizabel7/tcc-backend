import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      select: true
    },
    description: {
      type: String,
      select: true
    }
  },
  {
    timestamps: true
  }
);

export = serviceSchema;
