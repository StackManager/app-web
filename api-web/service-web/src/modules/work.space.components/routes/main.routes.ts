
import { Router } from 'express';
import { WorkSpaceComponentsRoutes } from './work.space.components.routes';
const routers = Router();


routers.use('/v1/work-space-component', WorkSpaceComponentsRoutes);


export { routers as WebComponentMainRoutes};