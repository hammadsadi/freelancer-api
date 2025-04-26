import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';
import { ClientServices } from './client.services';

/**
 * @Method POST
 * @Dsc USER Create
 * @Params
 * @Return Data
 */
const clientCreate = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ClientServices.createClient(req.user, req.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Client Created Successful',
      data: result,
    });
  },
);

export const ClientControllers = {
  clientCreate,
};
