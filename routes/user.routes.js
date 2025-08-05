import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send('create user'));

userRouter.put('/:id', (req, res) => res.send('update all users'));

userRouter.delete('/:id', (req, res) => res.send('delete user by id'));

export default userRouter;



