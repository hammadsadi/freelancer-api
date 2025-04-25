import { Router } from 'express';
import { UserControllers } from './user.controllers';
import { UserValidation } from './user.validation';
import validatedRequest from '../../shared/validatedRequest';

// Init Route
const userRouter = Router();

// Create User
userRouter.post(
  '/',
  validatedRequest(UserValidation.userCreateValidation),
  UserControllers.userCreate,
);

// Export Routes
export const UserRoutes = userRouter;
