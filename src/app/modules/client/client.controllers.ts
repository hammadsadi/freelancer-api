import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';
import { ClientServices } from './client.services';

/**
 * @Method POST
 * @Dsc CLIENT Create
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

/**
 * @Method PATCH
 * @Dsc Client Update
 * @Params clientId
 * @Return Data
 */
const clientUpdate = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { clientId } = req.params;
    const result = await ClientServices.updateClient(
      req.user,
      clientId,
      req.body,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Client Updated Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc GET All Clients
 * @Params ''
 * @Return Data
 */
const clientsGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ClientServices.getAllClientFromDB(req.user);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Clients Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc Single Client Get
 * @Params clientId
 * @Return Data
 */
const singleClientGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { clientId } = req.params;
    const result = await ClientServices.getSingleClientFromDB(
      req.user,
      clientId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Client Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method DELETE
 * @Dsc Delete Client
 * @Params clientId
 * @Return Data
 */
const deleteSingleClient = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { clientId } = req.params;
    const result = await ClientServices.deleteSingleClientFromDB(
      req.user,
      clientId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Client Deleted Successful',
      data: result,
    });
  },
);

export const ClientControllers = {
  clientCreate,
  clientUpdate,
  clientsGet,
  singleClientGet,
  deleteSingleClient,
};
