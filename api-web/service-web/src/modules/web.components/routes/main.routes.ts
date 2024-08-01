
import { Router } from 'express';
import { WebComponentsRoutes } from './web.components.routes';
const routers = Router();


routers.use('/v1/web-component', WebComponentsRoutes);


export { routers as WorkSpaceMainRoutes};