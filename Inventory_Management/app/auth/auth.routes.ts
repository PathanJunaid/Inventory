import { Router } from "express";
import * as authValidator from './auth.validator';
import { catchError } from "../commom/middleware/catch-error.middleware";
import * as auth_Controllers from './auth.controller'
const Auth_router = Router();

Auth_router
    .post('/login',authValidator.loginUser,catchError,auth_Controllers.loginUser)
    .post('/logout', auth_Controllers.logoutUser)

export default Auth_router