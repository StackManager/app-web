import { BaseList } from "@Commons/crud/crud.list.base";
import { WorkSpacePagesFilter } from "../filter/work.space.pages.filter";
import { WorkSpacePagesPopulate } from "../populate/work.space.pages.populate";
import { WorkSpacePages } from "../web.pages.model";
import { WorkSpacePagesDoc } from "../interface/work.space.pages.schema.interface";

export class WorkSpacePagesList extends BaseList<WorkSpacePagesDoc> {

  filter: WorkSpacePagesFilter;
  populate: WorkSpacePagesPopulate;

  constructor() {
    super("WorkSpacePages");
    this.filter = new WorkSpacePagesFilter(this.filterManager);
    this.populate = new WorkSpacePagesPopulate(this.populateModules);
  }
  
  getModel(){
    return WorkSpacePages;
  }

  getData(doc: WorkSpacePagesDoc){

    return {
      //name: doc.name,
    }
  }

}