import * as mongoose from "mongoose";
const Schema = mongoose.Schema;
//const User = require('./User');

const ratingSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      select: true
    },
    // user: {
    // 	type: User,
    // 	select: true
    // },
    grade: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [true, "grade is required."],
      select: true
    },
    comment: {
      type: String,
      select: true
    }
  },
  {
    timestamps: true
  }
);

export = ratingSchema;
