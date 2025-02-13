import { Router } from "express";
import * as warehouseValidator from './warehouse.validation';
import * as warehouseControllers from './warehouse.controllers';
import { catchError } from "../commom/middleware/catch-error.middleware";
import { authValidator } from "../commom/authValidator/AuthValidator";
import { generatereport } from "./warehouse.report";



export const warehouseRoutes = Router();

warehouseRoutes
.post('/', authValidator, warehouseValidator.createWarehouse,catchError,warehouseControllers.createWarehouse)
.delete('/:id', authValidator, warehouseControllers.deleteProduct)
.get('/:id', authValidator, warehouseControllers.getWarehousebyID)
.get('/', authValidator, warehouseControllers.getallWarehouse)
.get('/generatereport/:id', authValidator, generatereport)


export default warehouseRoutes;