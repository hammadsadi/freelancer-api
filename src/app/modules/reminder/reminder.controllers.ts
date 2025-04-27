import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';
import { ReminderServices } from './reminder.services';

/**
 * @Method POST
 * @Dsc Reminder Create
 * @Params
 * @Return Data
 */
const reminderCreate = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ReminderServices.reminderCreate(req.user, req.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Reminder Created Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc GET All Reminder
 * @Params ''
 * @Return Data
 */
const remindersGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ReminderServices.getAllReminderFromDB(req.user);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Reminder Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc Single Reminder Get
 * @Params reminderId
 * @Return Data
 */
const singleReminderGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { reminderId } = req.params;
    const result = await ReminderServices.getSingleReminderFromDB(
      req.user,
      reminderId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Reminder Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method DELETE
 * @Dsc Delete Reminder
 * @Params reminderId
 * @Return Data
 */
const deleteSingReminder = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { reminderId } = req.params;
    const result = await ReminderServices.deleteSingleReminderFromDB(
      req.user,
      reminderId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Reminder Deleted Successful',
      data: result,
    });
  },
);

export const ReminderControllers = {
  reminderCreate,
  remindersGet,
  singleReminderGet,
  deleteSingReminder,
};
