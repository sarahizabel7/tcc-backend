import * as mongoose from 'mongoose';
import * as Service from './Service';
const Schema = mongoose.Schema; 

const providedServiceSchema = new Schema({
  service: {
		type: Service,
		select: true
  },
  price: {
		type: Number,
		select: true
	},
  estimate: { //orçamento
    type: Boolean,
    select: true
  },
  charging_method: {
    type: String,
    enum: ['perHour', 'closeService'], //rever
    select: true
  }
}, {
  timestamps: true
});

export = providedServiceSchema;