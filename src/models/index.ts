import {model} from 'mongoose';
import * as iModels from '../interfaces/Models';

const ServiceSchema = require('./Service');
const CategorySchema = require('./Category');
const DistrictSchema = require('./District');
const CitySchema = require('./City');
const providedServiceSchema = require('./ProvidedService');
const RatingSchema = require('./Rating');
const ProviderSchema = require('./Provider');
const UserSchema = require('./User');

export default {
  Service: model<iModels.IServiceModel>('Service', ServiceSchema),
  Category: model<iModels.ICategoryModel>('Category', CategorySchema),
  District: model<iModels.IDistrictModel>('District', DistrictSchema),
  City: model<iModels.ICityModel>('City', CitySchema),
  ProvidedService: model<iModels.IProvidedServiceModel>('ProvidedService', providedServiceSchema),
  Rating: model<iModels.IRatingModel>('Rating', RatingSchema),
  Provider: model<iModels.IProviderModel>('Provider', ProviderSchema),
  User: model<iModels.IUserModel>('User', UserSchema)
};
