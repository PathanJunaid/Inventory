import asyncHandler from "express-async-handler";
import { NextFunction, request, type Request, type Response } from 'express';
import passport from "passport";
import { createUserTokens } from "../commom/services/passport-jwt.service";


export const loginUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const response = passport.authenticate('login', async (error: any, user: any, info: any) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            if (!user) {
                return res.status(401).json({ message: info.message || "Authentication failed" });
            }

            const { accessToken, refreshToken } = createUserTokens(user);
            // Save the tokens to cookies
            res.cookie('accessToken', accessToken, {
                httpOnly: true, // Make it accessible only by the server
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                maxAge: 60 * 60 * 1000, // 60 minutes expiry for accessToken
                sameSite: 'strict',  // Can adjust based on your needs
            });

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true, // Make it accessible only by the server
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiry for refreshToken
                sameSite: 'strict',  // Can adjust based on your needs
            });
            res.status(200).send({
                success: true,
                message: 'User is logged in successfully',
                user,
                accessToken,
                refreshToken
            });
        })(req, res, next);
    }
);

export const logoutUser = asyncHandler(async(req: Request, res: Response)=>{
    res.cookie('accessToken', "", {
        httpOnly: true, // Make it accessible only by the server
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 0, // 30 minutes expiry for accessToken
        sameSite: 'strict',  // Can adjust based on your needs
    });

    res.cookie('refreshToken', "", {
        httpOnly: true, // Make it accessible only by the server
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 0, // 7 days expiry for refreshToken
        sameSite: 'strict',  // Can adjust based on your needs
    });
    res.status(200).send({
        success: true,
        message: 'User is logged out successfully'
    });
})