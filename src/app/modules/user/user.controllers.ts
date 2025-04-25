import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import { UserServices } from './user.services';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';

/**
 * @Method DELETE
 * @Dsc Soft DELETE Single ADMIN Data
 * @Params adminId
 * @Return Data
 */
const userCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.userSaveToDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User Data Created Successful',
    data: result,
  });
});

export const UserControllers = {
  userCreate,
};
