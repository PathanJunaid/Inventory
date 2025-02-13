import { Router } from "express";
import * as inventoryController from './inventory.controllers';
import { catchError } from "../commom/middleware/catch-error.middleware";
import { authValidator } from "../commom/authValidator/AuthValidator";

const inventory_Routes = Router();

inventory_Routes
    .post('/', authValidator, catchError, inventoryController.createInventory)
    .get('/:id', authValidator, inventoryController.getInventory)
    .get('/', authValidator, catchError, inventoryController.getWarehouseInventory)
    .put('/:id', authValidator, catchError, inventoryController.updateInventory)
    .delete('/:id', authValidator, inventoryController.deleteInventory)


export default inventory_Routes;