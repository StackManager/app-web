import { Request, Response, NextFunction, Router } from 'express';
import { WorkSpaceComponentsCreateService } from '../services/work.space.components.create.service';
import { WorkSpaceComponentsListService } from '../services/work.space.components.list.service';
import { WorkSpaceComponentsDeletedService } from '../services/work.space.components.delete.service';
import { WorkSpaceComponentsStatusService } from '@WorkSpaceComponents/services/work.space.components.status.service';
import { WorkSpaceComponentsEditService } from '@WorkSpaceComponents/services/work.space.components.edit.service';

const routers = Router();

// Ruta POST crear una nueva instancia
routers.post('/component/:componentId', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WorkSpaceComponentsCreateService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});

// Ruta PUT
routers.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WorkSpaceComponentsEditService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});

// Ruta GET para obtener el listado con paginador
routers.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpaceComponentsListService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta PATCH cambiar el status
routers.patch('/:id/status', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpaceComponentsStatusService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta DELETE para eliminar de manera SOFT
routers.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpaceComponentsDeletedService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

export { routers as WorkSpaceComponentsRoutes };

