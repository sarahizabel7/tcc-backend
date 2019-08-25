import * as mongoose from 'mongoose';
const Schema = mongoose.Schema; 

const districtSchema = new Schema({
  name: {
		type: String,
		select: true
  }
}, {
  timestamps: true
});

export = districtSchema;