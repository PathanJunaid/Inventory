import { body } from 'express-validator';

export const addProduct = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('description').isString().withMessage('description must be a string'),
    body('price').notEmpty().withMessage('price must be number')
];