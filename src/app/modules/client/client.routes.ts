import { Router } from 'express';
import validatedRequest from '../../shared/validatedRequest';
import { ClientControllers } from './client.controllers';
import { ClientValidations } from './client.validation';
import auth from '../../middlewares/auth';

// Init Route
const clientRouter = Router();

// Create Client
clientRouter.post(
  '/create',
  auth,
  validatedRequest(ClientValidations.clientCreateValidation),
  ClientControllers.clientCreate,
);

// Export Routes
export const ClientRoutes = clientRouter;
