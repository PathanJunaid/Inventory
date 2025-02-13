import { Router } from "express";
import { catchError } from "../commom/middleware/catch-error.middleware";
import * as userValidator from './user.validator';
import * as userController from './user.controller'

const router = Router();

router
    .post("/", userValidator.createUser, catchError, userController.createUser)

export default router;