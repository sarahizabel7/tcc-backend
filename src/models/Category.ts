import * as mongoose from 'mongoose';
import * as Service from './Service';
const Schema = mongoose.Schema; 

const categorySchema = new Schema({
  name: {
		type: String,
		select: true
  },
  description: {
		type: String,
		select: true
	},
  services: {
    type: [Service],
    select: true
  }
}, {
  timestamps: true
});

export = categorySchema;