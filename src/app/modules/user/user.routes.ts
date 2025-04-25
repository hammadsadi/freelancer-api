import { Router } from 'express';
import { UserControllers } from './user.controllers';

// Init Route
const userRouter = Router();

// Create User
userRouter.post('/', UserControllers.userCreate);

// Export Routes
export const UserRoutes = userRouter;
