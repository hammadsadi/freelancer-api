import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { ClientRoutes } from '../modules/client/client.routes';
import { ProjectRoutes } from '../modules/project/project.routes';
import { InterActionLogRoutes } from '../modules/interactionLog/interactionLog.routes';

const router = Router();
// Module Routes Info
const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/client',
    route: ClientRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/log',
    route: InterActionLogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
