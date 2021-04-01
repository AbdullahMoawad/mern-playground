import { Router } from 'express';
import { userRoutes } from './user/routes';
import { isAuthorizedAdmin } from '../../util/request';
import { catchAsyncErrors } from '../../util/router';
import { toCsv } from '../../server/data';

const routes: Router = Router();

routes.use('/system/user', userRoutes);
routes.post('/export',isAuthorizedAdmin, catchAsyncErrors(toCsv));

export { routes as allRoutes };
