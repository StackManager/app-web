import { PopulateMongose } from "@Commons/mongose/populate.mongose";


export class WorkSpaceComponentsPopulate extends PopulateMongose{

  fields(select = ''){
    return 'name status deleted ' + select
  }

}