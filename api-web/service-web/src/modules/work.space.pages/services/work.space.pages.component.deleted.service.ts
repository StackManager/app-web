
import { inArrayObject } from "@Commons/validator/in.array.object.validator";
import { WorkSpaceComponentsRead } from "@WorkSpaceComponents/models/crud/work.space.components.read";
import { WorkSpacePagesBase } from "@WorkSpacePages/controller/work.space.pages.base";


export class WorkSpaceStructureDeletedService extends WorkSpacePagesBase {

  getSession = true;
  permissionService =  ["web_component_structure_deleted"]
  read: WorkSpaceComponentsRead = new WorkSpaceComponentsRead();

  async run() {
    //Get the id params
    const {id, idComponent} = this.req.params;
    //Get the instance with read
    const doc = await this.read.getById(id);

    // const find = inArrayObject.validateOrFail({
    //   id: idComponent, //Valor a buscar en validOption
    //   key: '_id', //llave a buscar en validOptions
    //   name: 'component', // nombre mostrado si falla
    //   validOptions: (doc.components)
    // })
    

    // //await doc.save();
    // // Response 
    // this.res.status(200).json({ name: doc.name, deleted: doc.deleted });
  }
}