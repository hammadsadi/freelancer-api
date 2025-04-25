import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import { UserServices } from './user.services';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';
import config from '../../config';

/**
 * @Method POST
 * @Dsc USER Create
 * @Params '
 * @Return Data
 */
const userCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.userSaveToDB(req.body);

  //   Token Set
  res.cookie('freelance_token', result?.token, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User Data Created Successful',
    data: result,
  });
});

/**
 * @Method POST
 * @Dsc USER Login
 * @Params '
 * @Return Data
 */
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.userLogin(req.body);
  //   Token Set
  res.cookie('freelance_token', result?.token, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User Login Successful',
    data: result,
  });
});

export const UserControllers = {
  userCreate,
  loginUser,
};
