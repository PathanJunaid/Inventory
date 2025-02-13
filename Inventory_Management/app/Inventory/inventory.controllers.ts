import { createResponse } from "../commom/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';
import * as userService from '../prisma/prisma.service';
import { decodeToken } from "../commom/services/passport-jwt.service";

export const createInventory = asyncHandler(async(req: Request, res: Response)=>{
    const result = await userService.addInventory(req.body,req.body.productId,req.body.warehouseId)
    res.send(createResponse(result, "Inventory added successfully"));
})

export const deleteInventory = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    const result  = await userService.deleteInventory(id);
    res.send(createResponse(result, "Inventory deleted successfully"));
})

export const updateInventory = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    console.log(req.body)
    const result = await userService.updateInventory(req.body,id);
    res.send(createResponse(result, "Inventory updated successfully"));
    
})

export const getInventory = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    const result = await userService.getInventory(id);
    res.send(createResponse(result, `Inventory with id ${id}`));
})

export const getWarehouseInventory = asyncHandler(async(req: Request, res: Response)=>{
    const result = await userService.getWarehouseInventory(req.body.id);
    res.send(createResponse(result, `Warehouse inventory with id ${req.body.id}`));
})
