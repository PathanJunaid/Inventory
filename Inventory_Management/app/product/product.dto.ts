import { BaseSchema } from "../commom/dto/base.dto";

export interface IProduct extends BaseSchema {
    name: string; // Product name
    description?: string; // Product description (optional)
    price: number; // Product price
  }