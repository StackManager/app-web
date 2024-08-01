import { Request, Response, NextFunction, Router } from 'express';
import { WebComponentsCreateService } from '../services/web.components.create.service';
import { WebComponentsListService } from '../services/web.components.list.service';
import { WebComponentsDeletedService } from '../services/web.components.delete.service';
import { WebComponentsStructureAddService } from '@Components/services/web.components.structure.add.service';
import { WebComponentsStructureDeletedService } from '@Components/services/web.components.structure.deleted.service';
import { WebComponentsEditService } from '@Components/services/web.components.edit.service';
import { WebComponentsStatusService } from '@Components/services/web.components.status.service';

const routers = Router();

// Ruta POST crear una nueva estructura de component
routers.post('/:id/component', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WebComponentsStructureAddService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});

// Ruta DELETE para eliminar de manera HARD
routers.delete('/:id/component/:idComponent', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WebComponentsStructureDeletedService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta POST crear una nueva instancia
routers.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WebComponentsCreateService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});

// Ruta POST crear una nueva instancia
routers.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const auth = new WebComponentsEditService(req, res, next);
   await auth.handleAsync(async () => {
     await auth.run();
   });
});


// Ruta GET para obtener el listado con paginador
routers.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WebComponentsListService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta DELETE para eliminar de manera SOFT
routers.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WebComponentsDeletedService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});

// Ruta PATCH CAMBIAR DE ESTATUS
routers.patch('/:id/status', async (req: Request, res: Response, next: NextFunction) => {
  const exec = new WebComponentsStatusService(req, res, next);
  await exec.handleAsync(async () => {
    await exec.run();
  });
});




export { routers as WebComponentsRoutes };

