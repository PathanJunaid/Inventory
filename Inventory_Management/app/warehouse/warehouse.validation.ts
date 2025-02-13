import { body } from 'express-validator';

export const createWarehouse = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('location').notEmpty().withMessage('location must be a number'),
];