import { createResponse } from "../commom/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';
import * as userService from '../prisma/prisma.service';
import { decodeToken } from "../commom/services/passport-jwt.service";

export const createWarehouse = asyncHandler(async(req: Request, res: Response)=>{
    const token = req.cookies['accessToken'];
    const user = decodeToken(token);
    const result = await userService.addwarehouse(req.body,user.id)
    res.send(createResponse(result, "Warehouse added successfully"));
})

export const deleteProduct = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    const result = await userService.deleteProduct(id);
    res.send(createResponse(result, "Warehouse deleted successfully"));
})

export const getWarehousebyID = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    const token = req.cookies['accessToken'];
    const user = decodeToken(token);
    const result = await userService.findWarehouse(id,user.id);
    res.send(createResponse(result, `Warehouse with id ${id}`));
    
})
export const getallWarehouse = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    const token = req.cookies['accessToken'];
    const user = decodeToken(token);
    const result = await userService.getAllWarehouse(id,user.id);
    res.send(createResponse(result, `all warehouse`));
    
})