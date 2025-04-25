import { Router } from 'express';
import { UserControllers } from './user.controllers';
import { UserValidation } from './user.validation';
import validatedRequest from '../../shared/validatedRequest';

// Init Route
const userRouter = Router();

// Create User
userRouter.post(
  '/create',
  validatedRequest(UserValidation.userCreateValidation),
  UserControllers.userCreate,
);

// Create User
userRouter.post(
  '/login',
  validatedRequest(UserValidation.userLoginValidation),
  UserControllers.loginUser,
);

// Export Routes
export const UserRoutes = userRouter;
