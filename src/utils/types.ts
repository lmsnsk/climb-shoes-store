export type Inputs = {
  username: string;
  password: string;
};

export type IProductFull = {
  id: number;
  title: string;
  description: string;
  photo: string;
  price: number;
  vendor: string;
  sizes: string;
  category: string;
  vendorInfo: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IProduct = {
  id: number;
  size: number | null;
  title: string;
  photo: string;
  vendor: string;
  price: number;
  category: string;
  isSizeNeed?: boolean;
};

export type AuthUser = {
  id: number;
  username: string;
};

export interface ICartElement {
  product: IProduct;
  count: number;
  owner: number;
}

export interface ICartElementSever {
  productId: number;
  size: number | null;
  count: number;
  owner: number;
}

export interface IOrderServer {
  id?: number;
  products: string;
  totalPrice: number;
  owner: number;
  status: boolean;
  address: string;
  date: string;
  createdAt?: string;
}

export interface IOrder {
  id?: number;
  products: Array<{ product: IProduct; count: number }>;
  totalPrice: number;
  owner: number;
  status: boolean;
  address: string;
  date: string;
  createdAt?: string;
}
