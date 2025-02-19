import { BaseSchema } from "../commom/dto/base.dto";

export interface IWarehouse {
  name: string; // Product name
  location: number; // Product price
}

export interface Warehouse extends BaseSchema {
  name: string,
  location: number,
  userId: string
}

export interface Inventory {
  inventory_id: string,
  product_id: string,
  name: string,
  price: number,
  quantity: number,
  minstack: number
}

