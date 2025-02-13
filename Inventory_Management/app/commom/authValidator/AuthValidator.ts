import asyncHandler from "express-async-handler";
import { NextFunction, type Request, type Response } from 'express';
import { decodeToken } from "../services/passport-jwt.service";
import * as dbServices from '../../prisma/prisma.service'
import { createResponse } from "../helper/response.helper";

export const authValidator = asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    const token = req.cookies['refreshToken'];
    const user = decodeToken(token);
    const isuser = await dbServices.get_userby_Email(user.email);

    if(user.id===isuser.id){
        next();
    }
    else{
        res.send(createResponse([],'Please login!'));
    }
})