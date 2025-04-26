import { Router } from 'express';
import validatedRequest from '../../shared/validatedRequest';
import auth from '../../middlewares/auth';
import { InterActionLogControllers } from './interactionLog.controllers';
import { LogValidations } from './interactionLog.validation';

// Init Route
const interActionLogRouter = Router();

// Get All Logs
interActionLogRouter.get('/', auth, InterActionLogControllers.logsGet);

// Get Single Log
interActionLogRouter.get(
  '/:logId',
  auth,
  InterActionLogControllers.singleLogGet,
);

// Delete Single Log
interActionLogRouter.delete(
  '/:logId',
  auth,
  InterActionLogControllers.deleteSingleLog,
);

// Create Project
interActionLogRouter.post(
  '/create',
  auth,
  validatedRequest(LogValidations.logCreateValidation),
  InterActionLogControllers.logCreate,
);

// Export Routes
export const InterActionLogRoutes = interActionLogRouter;
