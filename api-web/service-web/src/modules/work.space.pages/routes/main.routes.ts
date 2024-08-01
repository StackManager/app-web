
import { Router } from 'express';
import { WorkSpacePagesRoutes } from './work.space.pages.routes';
const routers = Router();


routers.use('/v1/work-space-page', WorkSpacePagesRoutes);


export { routers as WebPageMainRoutes};