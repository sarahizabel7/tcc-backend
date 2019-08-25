export interface IUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
  avatar?: string;
  cpf?: string;
  gender?: "female" | "male" | "other";
  phone?: string;
  provider?: IProvider;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProvider {
  provided_services: IProvidedService[];
  atendency_region: IDistrict[];
  rating: IRating[];
  gallery: any[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProvidedService {
  service: IService[];
  price: number;
  estimate: boolean;
  charging_method: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDistrict {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRating {
  user_id: string;
  grade: 1 | 2 | 3 | 4 | 5;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IService {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategory {
  name: string;
  description: string;
  services: IService[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICity {
  name: string;
  districts: IDistrict[];
  createdAt: Date;
  updatedAt: Date;
}
