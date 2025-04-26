import { Router } from 'express';
import { UserControllers } from './user.controllers';
import { UserValidation } from './user.validation';
import validatedRequest from '../../shared/validatedRequest';
import auth from '../../middlewares/auth';

// Init Route
const userRouter = Router();

// Me
userRouter.get('/me', auth, UserControllers.loggedInUserInfo);

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
