import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { ClientRoutes } from '../modules/client/client.routes';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
