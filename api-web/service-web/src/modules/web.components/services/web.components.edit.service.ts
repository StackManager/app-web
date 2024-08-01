import { NotAuthorizedError } from "@Commons/errors/factory/authorized.error";
import { WebComponentsBase } from "@Components/controller/web.components.base";
import { WebComponentsRead } from "@Components/models/crud/web.components.read";
import { WebComponentsData } from "@Components/models/data/web.components.data";


export class WebComponentsEditService extends WebComponentsBase {

  getSession = true;
  permissionService =  ["web_component_edit"]
  read: WebComponentsRead = new WebComponentsRead();

  async run() {
    //Get the id params
    const {id} = this.req.params;
    const { 
      name,
      description,
      slug,
      tags
    } = this.req.body;

    const dataModel = new WebComponentsData()
    dataModel.setName(name)
    dataModel.setDescription(description)
    dataModel.setSlug(slug)
    dataModel.setSlug(tags)

    //Get the instance with read
    const doc = await this.read.getById(id);

    //Edit
    doc.name = dataModel.getName()
    doc.description = dataModel.getDescription()
    doc.slug = dataModel.getSlug()
    doc.tags = dataModel.getTags()

    //Save and validate the changes
    await doc.save();
    // Response 
    this.res.status(200).json({ name: doc.name, status: doc.status });
  }
}