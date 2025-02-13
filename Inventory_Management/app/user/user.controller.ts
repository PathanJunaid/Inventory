import { createResponse } from "../commom/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';
import * as userService from '../prisma/prisma.service';
import bcrypt from 'bcrypt'

const hashPassword = async (password: string) => {
    const hash = await bcrypt.hash(password, 12);
    return hash;
};
// create user controller 
export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.get_userby_Email(req.body.email);
    req.body.password = await hashPassword(req.body.password)
    if(!user){
        const result = await userService.createUser(req.body);
        res.send(createResponse(result, "User created sucssefully"))
        return;
    }else{
        res.send(createResponse(user,"User already exists"));
        return
    }
});

// update user controller 
export const updateUser = asyncHandler(async(req: Request, res: Response)=>{
    // const result = await userService.updateUser(req.body.name,id);
    // res.send(createResponse(result, "User updated sucssefully"));

})