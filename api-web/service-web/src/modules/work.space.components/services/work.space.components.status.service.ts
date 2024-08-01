import { WorkSpaceComponentsBase } from "../controller/work.space.components.base";
import { WorkSpaceComponentsRead } from "../models/crud/work.space.components.read";

export class WorkSpaceComponentsStatusService extends WorkSpaceComponentsBase {

  getSession = true;
  permissionService =  ["work_space_component_status"]
  read: WorkSpaceComponentsRead = new WorkSpaceComponentsRead();

  async run() {
    //Get the id params
    const {id} = this.req.params;
    //Get the instance with read
    const doc = await this.read.getById(id);

    //Update status
    doc.status = !doc.status;
    //Save and validate the changes
    await doc.save();
    // Response 
    this.res.status(200).json({ status: doc.status });
  }
}