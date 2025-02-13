import { body } from 'express-validator';

export const createInventory = [
    body('quantity').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('minstock').notEmpty().withMessage('minstock is required'),
    body('productId').notEmpty().withMessage('productId is required'),
    body('warehouseId').notEmpty().withMessage('warehouseId is required'),
];

export const  productId = [
    body('warehouseId').notEmpty().withMessage('warehouseId is required')

]