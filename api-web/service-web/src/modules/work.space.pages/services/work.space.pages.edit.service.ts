import { WorkSpacePagesBase } from "@WorkSpacePages/controller/work.space.pages.base";
import { WorkSpacePagesRead } from "@WorkSpacePages/models/crud/work.space.pages.read";
import { WorkSpacePagesData } from "@WorkSpacePages/models/data/work.space.pages.data";


export class WorkSpacePagesEditService extends WorkSpacePagesBase {

  getSession = true;
  permissionService =  ["work_space_page_deleted"]
  read: WorkSpacePagesRead = new WorkSpacePagesRead();

  async run() {
    //Get the id params
    const {id} = this.req.params;
    const { 
      name,
    } = this.req.body;

    const dataModel = new WorkSpacePagesData();
    dataModel.setName(name)

    //Get the instance with read
    const doc = await this.read.getById(id);

    //Edit
    doc.name = dataModel.getName()
    doc.slug = dataModel.getSlug()

    //Save and validate the changes
    await doc.save();
    // Response 
    this.res.status(200).json({ name: doc.name, slug: doc.slug, status: doc.status });
  }
}