
import { WorkSpacePagesBase } from "../controller/work.space.pages.base";
import { WorkSpacePagesData } from "../models/data/work.space.pages.data";
import { WebComponentsRead } from "@Components/models/crud/web.components.read";
import { WorkSpacePages } from "../models/web.pages.model";


export class WorkSpacePagesCreateService extends WorkSpacePagesBase {

  getSession = true;
  permissionService =  ["work_space_page_create"]
  readWebComponent = new WebComponentsRead()

  async run() {

    //Get the id params
    const {name} = this.req.body;

    const dataModel = new WorkSpacePagesData();
    dataModel.setName(name)

    // Crear un nuevo documento en la base de datos
    const doc = new WorkSpacePages({
      workSpaceId: this.session.workSpaceId,
      name: dataModel.getName(),
      slug: dataModel.getSlug(),
      status: true,
      deleted: false
    });
        
    // Guardar el documento en la base de datos
    await doc.save();
  
    // Convertir el documento a JSON y enviar la respuesta
    const data = doc.toJSON();
    this.res.status(201).json({  workSpaceId: doc.workSpaceId,  name: doc.name, status: doc.status  });
  }
}