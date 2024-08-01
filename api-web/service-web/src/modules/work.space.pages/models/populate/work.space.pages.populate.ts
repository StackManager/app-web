import { PopulateMongose } from "@Commons/mongose/populate.mongose";


export class WorkSpacePagesPopulate extends PopulateMongose{

  fields(select = ''){
    return 'name status deleted ' + select
  }

}