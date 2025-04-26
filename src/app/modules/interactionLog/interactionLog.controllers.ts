import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';
import { ClientServices } from '../client/client.services';
import { ProjectServices } from '../project/project.services';
import { InterActionLogServices } from './interactionLog.services';

/**
 * @Method POST
 * @Dsc Log Create
 * @Params
 * @Return Data
 */
const logCreate = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await InterActionLogServices.logCreate(req.user, req.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Log Created Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc GET All Logs
 * @Params ''
 * @Return Data
 */
const logsGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await InterActionLogServices.getAllLogsFromDB(req.user);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Logs Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc Single Log Get
 * @Params logId
 * @Return Data
 */
const singleLogGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { logId } = req.params;
    const result = await InterActionLogServices.getSingleLogFromDB(
      req.user,
      logId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Log Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method DELETE
 * @Dsc Delete Log
 * @Params logId
 * @Return Data
 */
const deleteSingleLog = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { logId } = req.params;
    const result = await InterActionLogServices.deleteSingleLogFromDB(
      req.user,
      logId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Log Deleted Successful',
      data: result,
    });
  },
);

export const InterActionLogControllers = {
  logCreate,
  logsGet,
  singleLogGet,
  deleteSingleLog,
};
