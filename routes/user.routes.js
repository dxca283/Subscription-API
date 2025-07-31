import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send('get all users'));

userRouter.get('/:id', (req, res) => res.send('get user details'));

userRouter.post('/', (req, res) => res.send('create user'));

userRouter.put('/:id', (req, res) => res.send('update all users'));

userRouter.delete('/:id', (req, res) => res.send('delete user by id'));

export default userRouter;



