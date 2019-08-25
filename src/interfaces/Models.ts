import { Document } from 'mongoose';
import * as entities from './Entities';

export interface IUserModel extends entities.IUser, Document {
  setPassword: any,
  toAuthJSON: any,
  validatePassword: any,
}

export interface IProviderModel extends entities.IProvider, Document {

}

export interface IProvidedServiceModel extends entities.IProvidedService, Document {

}

export interface IDistrictModel extends entities.IDistrict, Document {

}

export interface IRatingModel extends entities.IRating, Document {

}

export interface IServiceModel extends entities.IService, Document {

}

export interface ICategoryModel extends entities.ICategory, Document {

}

export interface ICityModel extends entities.ICity, Document {

}