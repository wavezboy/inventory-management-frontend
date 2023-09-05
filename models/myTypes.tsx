export interface adminType {
  email: string;
  firstName: string;
  lastName: string;
  _id: string;
  storeId: string;
  adminId: string;
}

export interface userType {
  email: string;
  firstName: string;
  lastName: string;
  _id: string;
  storeId: string;
  adminId: string;
}

export interface salesLogType {
  product: string;
  quantity: string;
  salesPricePerOne: number;
  totalSalesPrice: number;
  _id: string;
  storeId: string;
  adminId: string;
}

export interface productType {
  storeId: string;
  adminId: string;
  name: string;
  details: String;
  manufacturer: string;
  price: number;
  quantity: number;
  _id: string;
}

export interface storeType {
  storeName: string;
  email: string;
  _id: string;
  storeId: string;
}
