import { Request, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/SendResponse';
import status from 'http-status';
import { ClientServices } from '../client/client.services';
import { ProjectServices } from './project.services';

/**
 * @Method POST
 * @Dsc Project Create
 * @Params
 * @Return Data
 */
const projectCreate = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ProjectServices.projectCreate(req.user, req.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Project Created Successful',
      data: result,
    });
  },
);

/**
 * @Method PATCH
 * @Dsc Project Update
 * @Params projectId
 * @Return Data
 */
const projectUpdate = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { projectId } = req.params;
    const result = await ProjectServices.updateProject(
      req.user,
      projectId,
      req.body,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Project Updated Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc GET All Projects
 * @Params ''
 * @Return Data
 */
const projectsGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ProjectServices.getAllProjectFromDB(req.user);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Project Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method GET
 * @Dsc Single Project Get
 * @Params projectId
 * @Return Data
 */
const singleProjectGet = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { projectId } = req.params;
    const result = await ProjectServices.getSingleProjectFromDB(
      req.user,
      projectId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Project Retrieved Successful',
      data: result,
    });
  },
);

/**
 * @Method DELETE
 * @Dsc Delete Project
 * @Params projectId
 * @Return Data
 */
const deleteSingleProject = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const { projectId } = req.params;
    const result = await ProjectServices.deleteSingleProjectFromDB(
      req.user,
      projectId,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Project Deleted Successful',
      data: result,
    });
  },
);

export const ProjectControllers = {
  projectCreate,
  projectUpdate,
  projectsGet,
  singleProjectGet,
  deleteSingleProject,
};
