import { Request, Response, NextFunction, Router } from 'express';
import { WorkSpacePagesCreateService } from '../services/work.space.pages.create.service';
import { WorkSpacePagesListService } from '../services/work.space.pages.list.service';
import { WorkSpacePagesDeletedService } from '../services/work.space.pages.delete.service';
import { WorkSpaceStructureAddService } from '@WorkSpacePages/services/work.space.pages.component.add.service';
import { WorkSpaceStructureDeletedService } from '@WorkSpacePages/services/work.space.pages.component.deleted.service';
import { WorkSpacePagesEditService } from '@WorkSpacePages/services/work.space.pages.edit.service';
import { WorkSpacePagesStatusService } from '@WorkSpacePages/services/work.space.pages.status.service';


const routers = Router();

// Ruta POST crear una nueva instancia
routers.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WorkSpacePagesCreateService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});

// Ruta GET para obtener el listado con paginador
routers.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpacePagesListService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// 
routers.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpacePagesEditService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta STATUS cambio
routers.patch('/:id/status', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpacePagesStatusService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta DELETE para eliminar de manera SOFT
routers.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpacePagesDeletedService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta POST crear una nueva estructura de component
routers.post('/:id/component', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WorkSpaceStructureAddService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});

// Ruta DELETE para eliminar de manera HARD
routers.delete('/:id/component/:idComponent', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WorkSpaceStructureDeletedService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

export { routers as WorkSpacePagesRoutes };

