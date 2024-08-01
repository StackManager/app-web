import { WorkSpacePagesBase } from "@WorkSpacePages/controller/work.space.pages.base";
import { WorkSpacePagesRead } from "@WorkSpacePages/models/crud/work.space.pages.read";
import { WebPagesDataStructure } from "@WorkSpacePages/models/data/work.space.pages.structure.data";

export class WorkSpaceStructureAddService extends WorkSpacePagesBase {

  getSession = true;
  permissionService =  ["web_component_structure_add"]
  read: WorkSpacePagesRead = new WorkSpacePagesRead();

  async run() {
    //Get the id params
    const {id} = this.req.params;
    //Get the instance with read
    const doc = await this.read.getById(id);

    const { 
      workSpaceComponentId,
      position
    } = this.req.body;
    
    const dataModel = new WebPagesDataStructure();
    dataModel.setComponentId(workSpaceComponentId);
    dataModel.setPosition(position);

    // Crear un nuevo subdocumento en la base de datos
    doc.page.push({
      position: dataModel.getPosition(),
      componentId: dataModel.getComponentId(),
    })

    //Save and validate the changes
    await doc.save();
    // Response 
    this.res.status(200).json({ name: doc.name, page: doc.page });
  }
}