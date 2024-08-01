import { WebComponentsRead } from "@Components/models/crud/web.components.read";
import { WorkSpaceComponentsBase } from "@WorkSpaceComponents/controller/work.space.components.base";
import { WorkSpaceComponentsRead } from "@WorkSpaceComponents/models/crud/work.space.components.read";
import { WorkSpaceComponentsData } from "@WorkSpaceComponents/models/data/work.space.components.data";



export class WorkSpaceComponentsEditService extends WorkSpaceComponentsBase {

  getSession = true;
  permissionService =  ["work_space_component_delete"]
  read: WorkSpaceComponentsRead = new WorkSpaceComponentsRead();
  readWebComponent = new WebComponentsRead()

  async run() {
    //Get the id params
    const {id} = this.req.params;
    const data = this.req.body;

    //Get the instance with read
    const doc = await this.read.getById(id);

    //Get the instance with read
    const docComponent = await this.readWebComponent.getById(doc.componentId);

    const dataModel = new WorkSpaceComponentsData();
    dataModel.setComponent({ data, components: docComponent.components })

    //Edit
    doc.data = dataModel.getComponent()
    
    //Save and validate the changes
    await doc.save();
    // Response 
    this.res.status(200).json({ data: doc.data });
  }
}