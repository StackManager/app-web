import { WebComponentsBase } from "../controller/web.components.base";
import { WebComponentsRead } from "../models/crud/web.components.read";


export class WebComponentsStatusService extends WebComponentsBase {

  getSession = true;
  permissionService =  ["web_component_status"]
  read: WebComponentsRead = new WebComponentsRead();

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
    this.res.status(200).json({ name: doc.name, status: doc.status });
  }
}