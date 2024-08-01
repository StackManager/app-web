import { WorkSpacePagesBase } from "../controller/work.space.pages.base";
import { WorkSpacePagesRead } from "../models/crud/work.space.pages.read";

export class WorkSpacePagesStatusService extends WorkSpacePagesBase {

  getSession = true;
  permissionService =  ["work_space_page_status"]
  read: WorkSpacePagesRead = new WorkSpacePagesRead();

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