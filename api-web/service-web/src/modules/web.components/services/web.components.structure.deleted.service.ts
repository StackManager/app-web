import { WebComponentsBase } from "../controller/web.components.base";
import { WebComponentsRead } from "../models/crud/web.components.read";
import { inArrayObject } from "@Commons/validator/in.array.object.validator";

export class WebComponentsStructureDeletedService extends WebComponentsBase {

  getSession = true;
  permissionService =  ["web_component_structure_deleted"]
  read: WebComponentsRead = new WebComponentsRead();

  async run() {
    //Get the id params
    const {id, idComponent} = this.req.params;
    //Get the instance with read
    const doc = await this.read.getById(id);

    const element = inArrayObject.validateOrFail({
      id: idComponent, //Valor a buscar en validOption
      key: '_id', //llave a buscar en validOptions
      name: 'component', // nombre mostrado si falla
      validOptions: (doc.components)
    })
    
    //Update component
    doc.components.splice(element.index, 1);

    //Save document
    await doc.save();

    // Response 
    this.res.status(200).json({ name: doc.name, deleted: doc.deleted });
  }
}