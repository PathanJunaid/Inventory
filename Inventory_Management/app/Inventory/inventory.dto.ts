import { BaseSchema } from "../commom/dto/base.dto";

export interface IInventory {
    quantity: number;
    minStock: number;
    productId: string;
  }