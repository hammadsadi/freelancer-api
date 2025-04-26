import { Router } from 'express';
import validatedRequest from '../../shared/validatedRequest';
import auth from '../../middlewares/auth';
import { InterActionLogControllers } from '../interactionLog/interactionLog.controllers';
import { LogValidations } from '../interactionLog/interactionLog.validation';
import { ReminderValidations } from './reminder.validation';
import { ReminderControllers } from './reminder.controllers';

// Init Route
const reminderRouter = Router();

// Get All Reminders
reminderRouter.get('/', auth, ReminderControllers.remindersGet);

// Get Single Reminder
reminderRouter.get('/:reminderId', auth, ReminderControllers.singleReminderGet);

// Delete Single Reminder
reminderRouter.delete(
  '/:reminderId',
  auth,
  ReminderControllers.deleteSingReminder,
);

// Create Reminder
reminderRouter.post(
  '/create',
  auth,
  validatedRequest(ReminderValidations.reminderCreateValidation),
  ReminderControllers.reminderCreate,
);

// Export Routes
export const ReminderRoutes = reminderRouter;
