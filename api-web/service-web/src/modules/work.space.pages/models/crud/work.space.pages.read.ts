import { BaseReader } from "@Commons/crud/crud.reader.base";
import { WorkSpacePagesDoc } from "../interface/work.space.pages.schema.interface";
import { WorkSpacePagesFilter } from "../filter/work.space.pages.filter";
import { WorkSpacePagesPopulate } from "../populate/work.space.pages.populate";
import { WorkSpacePages } from "../web.pages.model";

export class WorkSpacePagesRead extends BaseReader<WorkSpacePagesDoc> {

  filter: WorkSpacePagesFilter;
  populate: WorkSpacePagesPopulate;

  constructor() {
    super("WorkSpacePagesId");
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