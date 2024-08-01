import { BaseList } from "@Commons/crud/crud.list.base";
import { WorkSpaceComponentsDoc } from "../interface/work.space.components.schema.interface";
import { WorkSpaceComponentsFilter } from "../filter/work.space.components.filter";
import { WorkSpaceComponentsPopulate } from "../populate/work.space.components.populate";
import { WorkSpaceComponents } from "../web.components.model";

export class WorkSpaceComponentsList extends BaseList<WorkSpaceComponentsDoc> {

  filter: WorkSpaceComponentsFilter;
  populate: WorkSpaceComponentsPopulate;

  constructor() {
    super("WorkSpaceComponents");
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