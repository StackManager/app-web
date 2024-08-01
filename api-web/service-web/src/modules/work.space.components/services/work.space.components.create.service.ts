import { WorkSpaceComponents } from "@WorkSpaceComponents/models/web.components.model";
import { WorkSpaceComponentsBase } from "../controller/work.space.components.base";
import { WorkSpaceComponentsData } from "../models/data/work.space.components.data";
import { WebComponentsRead } from "@Components/models/crud/web.components.read";
import { WebComponentsData } from "@Components/models/data/web.components.data";


export class WorkSpaceComponentsCreateService extends WorkSpaceComponentsBase {

  getSession = true;
  permissionService =  ["work_space_component_create"]
  readWebComponent = new WebComponentsRead()
  webComponentsData = new WebComponentsData()

  async run() {

    //Get the id params
    const {componentId} = this.req.params;
    const data = this.req.body

    const dataModel = new WorkSpaceComponentsData();
    dataModel.setComponentId(componentId)

    //Get the instance with read
    const docComponent = await this.readWebComponent.getById(dataModel.getComponentId().toString());

    dataModel.setComponent({ data, components: docComponent.components })

    // Crear un nuevo documento en la base de datos
    const doc = new WorkSpaceComponents({
      workSpaceId: this.session.workSpaceId,
      data: dataModel.getComponent(),
      componentId: dataModel.getComponentId().toString(),
      status: true,
      deleted: false
    });
    
    // Guardar el documento en la base de datos
    await doc.save();
    
    //Sent response
    this.res.status(201).json({  workSpaceId: doc.workSpaceId, data: doc.data, status: doc.status  });
  }
}