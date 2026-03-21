import express from "express";
import { getPublishedCreations, getuserCreations, toggleLikeCreation } from "../controller/userController.js";
import auth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get('/get-user-creations',auth,getuserCreations)
userRouter.get('/get-published-creations',auth,getPublishedCreations)
userRouter.post('/toggle-like-creation',auth,toggleLikeCreation)

export default userRouter;
 