import * as mongoose from 'mongoose';
import * as District from './District';
const Schema = mongoose.Schema; 

const citySchema = new Schema({
  name: {
		type: String,
		select: true
  },
  districts: {
		type: [District],
		select: true
	}
}, {
  timestamps: true
});

export = citySchema;