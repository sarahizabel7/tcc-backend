import * as mongoose from "mongoose";
import * as ProvidedService from "./ProvidedService";
import * as District from "./District";
import * as Rating from "./Rating";
const Schema = mongoose.Schema;

const providerSchema = new Schema(
  {
    provided_services: {
      type: [ProvidedService],
      select: true
    },
    atendency_region: {
      type: [District],
      select: true
    },
    rating: {
      type: [Rating],
      select: true
    },
    gallery: {
      type: Array,
      select: true
    }
  },
  {
    timestamps: true
  }
);

export = providerSchema;
