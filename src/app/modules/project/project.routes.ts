import { Router } from 'express';
import validatedRequest from '../../shared/validatedRequest';
import auth from '../../middlewares/auth';
import { ProjectControllers } from './project.controllers';
import { ProjectValidations } from './project.validation';

// Init Route
const projectRouter = Router();

// Get All Projects
projectRouter.get('/', auth, ProjectControllers.projectsGet);

// Get Single Project
projectRouter.get('/:projectId', auth, ProjectControllers.singleProjectGet);

// Delete Single Project
projectRouter.delete(
  '/:projectId',
  auth,
  ProjectControllers.deleteSingleProject,
);

// Create Project
projectRouter.post(
  '/create',
  auth,
  validatedRequest(ProjectValidations.projectCreateValidation),
  ProjectControllers.projectCreate,
);

// Update Project
projectRouter.patch(
  '/:projectId',
  auth,
  validatedRequest(ProjectValidations.projectUpdateValidation),
  ProjectControllers.projectUpdate,
);

// Export Routes
export const ProjectRoutes = projectRouter;
