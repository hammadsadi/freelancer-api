import { Router } from 'express';
import validatedRequest from '../../shared/validatedRequest';
import { ClientControllers } from './client.controllers';
import { ClientValidations } from './client.validation';
import auth from '../../middlewares/auth';

// Init Route
const clientRouter = Router();

// Get All Clients
clientRouter.get('/', auth, ClientControllers.clientsGet);

// Get Single Client
clientRouter.get('/:clientId', auth, ClientControllers.singleClientGet);

// Delete Single Client
clientRouter.delete('/:clientId', auth, ClientControllers.deleteSingleClient);

// Create Client
clientRouter.post(
  '/create',
  auth,
  validatedRequest(ClientValidations.clientCreateValidation),
  ClientControllers.clientCreate,
);

// Update Client
clientRouter.patch(
  '/:clientId',
  auth,
  validatedRequest(ClientValidations.clientUpdateValidation),
  ClientControllers.clientUpdate,
);

// Export Routes
export const ClientRoutes = clientRouter;
