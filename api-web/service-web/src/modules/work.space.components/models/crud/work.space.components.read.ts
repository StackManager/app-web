import { BaseReader } from "@Commons/crud/crud.reader.base";
import { WorkSpaceComponentsDoc } from "../interface/work.space.components.schema.interface";
import { WorkSpaceComponentsFilter } from "../filter/work.space.components.filter";
import { WorkSpaceComponentsPopulate } from "../populate/work.space.components.populate";
import { WorkSpaceComponents } from "../web.components.model";


export class WorkSpaceComponentsRead extends BaseReader<WorkSpaceComponentsDoc> {

  filter: WorkSpaceComponentsFilter;
  populate: WorkSpaceComponentsPopulate;

  constructor() {
    super("WorkSpaceComponentsId");
    this.filter = new WorkSpaceComponentsFilter(this.filterManager);
    this.populate = new WorkSpaceComponentsPopulate(this.populateModules);
  }
  
  getModel(){
    return WorkSpaceComponents;
  }
  
  getData(doc: WorkSpaceComponentsDoc){

    return {
      //name: doc.name,
    }
  }

}