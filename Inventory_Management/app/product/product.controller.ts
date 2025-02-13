import { createResponse } from "../commom/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';
import * as userService from '../prisma/prisma.service';

export const createProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await userService.getProductby_nameAndprice(req.body.name, req.body.price);
    if(product.length==0){
        req.body.price = Number(req.body.price)
        const result = await userService.addProduct(req.body);
        res.send(createResponse(result, "Product added successfully"));
        return;
    }else{
        res.send(createResponse(product, "product already added"));
        return;
    }
});

export const updatedProduct = asyncHandler(async(req:Request, res: Response)=>{
    const {id} = req.params;
    const product = await userService.getProductbyId(id);
    if(product){
        const result  = await userService.updateProduct(req.body, id);
        res.send(createResponse(result, "Product updated successfully"));
        return;
    }else{
        res.send(createResponse([], "Product not found"))
        return;
    }

})

export const deleteProduct = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params;
    const result = await userService.deleteProduct(id);
    res.send(createResponse(result, "Product deleted successfully"));
})

export const getproductByID = asyncHandler(async(req: Request, res: Response)=>{
    const {id} = req.params
    const result  = await userService.getProductbyId(id);
    res.send(createResponse(result, `product with id : ${id}`));
})

export const getallProducts = asyncHandler(async(req: Request, res: Response)=>{
    const result = await userService.getallProducts();
    res.send(createResponse(result, `products`));

})