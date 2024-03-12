import express from 'express';
import { createUserctrl, deleteUserctrl, getAllUsersctrl, getUserByIdctrl, updateUserctrl } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/create' , createUserctrl)
userRouter.get('/' , getAllUsersctrl)
userRouter.get('/get/:id' , getUserByIdctrl)
userRouter.put('/:id' , updateUserctrl)
userRouter.delete('/:id' , deleteUserctrl)

export default userRouter