import { Router } from "express";
import * as product_validator from './product.validator';
import * as product_Controllers from './product.controller';
import { catchError } from "../commom/middleware/catch-error.middleware";
import { authValidator } from "../commom/authValidator/AuthValidator";

const product_routes = Router();

product_routes
            .post('/',authValidator, product_validator.addProduct,catchError,product_Controllers.createProduct)
            .put('/:id',authValidator, product_validator.addProduct,catchError,product_Controllers.updatedProduct)
            .delete('/:id',authValidator, product_Controllers.deleteProduct)
            .get('/:id',authValidator, product_Controllers.getproductByID)
            .get('/',authValidator, product_Controllers.getallProducts)

export default product_routes;