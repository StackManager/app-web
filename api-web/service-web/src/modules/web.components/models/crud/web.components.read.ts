import { BaseReader } from "@Commons/crud/crud.reader.base";
import { WebComponentsDoc } from "../interface/web.components.schema.interface";
import { WebComponentsFilter } from "../filter/web.components.filter";
import { WebComponentsPopulate } from "../populate/web.components.populate";
import { WebComponents } from "../web.components.model";


export class WebComponentsRead extends BaseReader<WebComponentsDoc> {

  filter: WebComponentsFilter;
  populate: WebComponentsPopulate;

  constructor() {
    super("WebComponentsId");
    this.filter = new WebComponentsFilter(this.filterManager);
    this.populate = new WebComponentsPopulate(this.populateModules);
  }
  
  getModel(){
    return WebComponents;
  }
  
  getData(doc: WebComponentsDoc){

    return {
      name: doc.name,
    }
  }

}